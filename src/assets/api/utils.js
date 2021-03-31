import request from '@/assets/scripts/utils/request';

// 获取上传科界七牛token（注意是科界主要是 用户头像使用）
export function getkjqntoken(data) {
    return request({
        url: '/upload/getkjqntoken',
        method: 'post',
        data
    });
}
// 获取上传科创中国七牛token（注意是科创中国）
export function getqntoken(data) {
    return request({
        url: '/upload/getkjqntoken',
        method: 'post',
        data
    });
}

// 获取省市区列表
export function getDistrictTree(params) {
    return request({
        url: '/common/getDistrictTree',
        method: 'get',
        params
    });
}

// 获取创新城市的两级列表
export function getInnovateDistrict(params) {
    return request({
        url: '/common/getInnovateDistrict',
        method: 'get',
        params
    });
}

// 获取当前的审核类型下的待审核数据数量
export function getCountAudit(params) {
    return request({
        url: '/common/getCountAudit',
        method: 'get',
        params
    });
}


// 获取当前的服务团列表
export function getFromteam(params) {
    return request({
        url: '/common/getfromteam',
        method: 'get',
        params
    });
}

//获取服务团下的专家列表
export function getGroupScholarList(params) {
    return request({
        url: '/demand/getGroupScholarList',
        method: 'get',
        params
    });
}

// 上传base到七牛
export function uploadBase64(name, token, data) {


    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();

        xhr.open("post", 'https://upload.qiniup.com/putb64/-1/key/' + name, false);
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.setRequestHeader("Authorization", 'UpToken ' + token);
        xhr.onload = function() {
            resolve(JSON.parse(xhr.response));
        }
        xhr.onerror=function(){
            reject();
        }
        xhr.send(data);
    })


}
// 校验网址
export function validateURL(textval) {
    const urlregex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
    return urlregex.test(textval)
}


