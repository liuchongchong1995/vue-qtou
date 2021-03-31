import axios from 'axios';
import Qs from 'qs';
import { MessageBox, Message } from 'element-ui';
import store from '@/store';
import { getToken } from './auth';

const ajax = axios.create({
    baseURL: '/api',
    withCredentials: true,
    timeout: 120000
});

ajax.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['X-Token'] = getToken();
            // 临时增加token参数
            if (!config.params) {
                config['params'] = {}
            }
            config.params['token'] = getToken();
            config.params['d'] = new Date().getTime();
        }
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
        config.transformRequest = [function (data) {
            // 在请求之前对data传参进行格式转换
            data = Qs.stringify(data);
            return data;
        }]

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

ajax.interceptors.response.use(
    response => {
        let res = response.data;
        // 如果返回code不是0，则为错误；
        if (res.code !== 0) {
            if (res.code === 302) { // 非法、其他客户端登录、令牌过期
                MessageBox.confirm('当前账号已退出登录，您可以取消停留在这个页面或者是重新登录', '确认', {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // store.dispatch('user/resetToken').then(() => {
                    //     location.reload();
                    // })
                });
            } else {
                Message({
                    message: res.error ? res.error[0].value : (res.msg || 'Error'),
                    type: 'error',
                    duration: 5 * 1000
                });
            }

            return Promise.reject(new Error(res.error[0].value || res.msg || 'Error'));
        } else {
            return res;
        }
    },
    error => {
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });


        return Promise.reject(error);
    }
);

export default ajax;
