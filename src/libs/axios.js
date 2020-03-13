import axios from 'axios';
import qs from 'qs';
import {
    Toast
} from 'mint-ui'
let instance = axios.create({
    baseURL: 'https://douban.uieee.com/v2',
    timeout: 1000 * 10,
    withCredentials: true,
    paramsSerializer: params => {
        return qs.stringify(params, {
            encode: true
        })
    }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    const {
        status,
        data
    } = response;
    return {
        status,
        data
    };
}, function (error) {
    // 对响应错误做点什么
    Toast({
        message: '服务端异常',
        position: 'top'
    })
    return Promise.reject(error);
});

export default instance;