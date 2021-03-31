/**
 * QiNiu FileUpload
 */

import * as qiniu from 'qiniu-js';
import { dateFormat } from '@/assets/scripts/utils/date';

export const fileUpload = (params) => {
    let obj = {
        token: params.token,
        request: params.request,
        complete: params.complete || function () {},
        next: params.next || function () {},
        error: params.error || function () {},
        module: params.module || '',
        filetype: params.filetype||params.module || 'image',
    };

    const {
            file
        } = obj.request;
    const key = dateFormat(Math.round(new Date() / 1000), "yyyy/MM/dd") + '/' + obj.module + '/' + parseInt(Math.random() * 1000000) + /\.[^\.]+$/.exec(file.name);

    const putExtra = {
            fname: "",
            params: {},
            mimeType: [] || null
        },
        config = {
            useCdnDomain: true,
        };

    let options = {
        quality: 1,
        noCompressIfLarger: true,
        maxWidth: 1920,
        maxHeight: 1920
    };

    // 视频上传
    if (obj.filetype != 'image') {
        let observable = qiniu.upload(file, key, obj.token, putExtra, config);
        let subscription = observable.subscribe(obj.next, obj.error, obj.complete);
        return subscription;
    }
    qiniu.compressImage(file, options).then(data => {
        let observable = qiniu.upload(data.dist, key, obj.token, putExtra, config);
        let subscription = observable.subscribe(obj.next, obj.error, obj.complete);

        return subscription;
    }).catch(res => {
        return res
    })
}