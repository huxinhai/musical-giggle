import axios, {} from 'axios';
function toPromise(fn) {
    const result = fn();
    // 如果返回值不是 Promise，则用 Promise.resolve() 包装
    return result instanceof Promise ? result : Promise.resolve(result);
}
export class Request {
    static axiosInstance;
    static getToken;
    static UnauthorizedCb;
    static init(baseURL, getToken, UnauthorizedCb) {
        this.axiosInstance = axios.create({
            baseURL,
            timeout: 60000,
            withCredentials: !0,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        this.initInterceptors();
        this.UnauthorizedCb = UnauthorizedCb;
        this.getToken = toPromise(getToken);
        return axios;
    }
    static initInterceptors() {
        this.axiosInstance.interceptors.request.use(async (config) => {
            // config.data = qs.stringify(config.data)
            // console.log(config,'@')
            config.headers['token'] = await this.getToken || '';
            config.headers['Authorization'] = `Bearer ${await this.getToken}`;
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
        this.axiosInstance.interceptors.response.use((response) => {
            // const { statusText, status, data } = response
            const { data } = response;
            return data;
            // if (statusText === 'OK' || status === 200) {
            //     return data
            // } else {
            //     return Promise.reject(data)
            // }
        }, (error) => {
            Request.errorHandle(error.response);
            if (error.response.statusText === 'Unauthorized') {
                this.UnauthorizedCb?.();
                // const t_data = getToken();
                // sendLog({
                //   type: 'error',
                //   uid: t_data['username'] || '',
                //   spm: 'login.out.expire.0',
                //   extInfo: JSON.stringify({}),
                // });
                // window.localStorage.clear();
            }
            return Promise.reject(error.response.data);
        });
    }
    static errorHandle(res) {
        // 状态码判断
        switch (res?.status) {
            case 400:
                console.error('错误请求');
                break;
            case 401:
                console.error('未授权，请重新登录');
                break;
            case 403:
                console.error('拒绝访问');
                break;
            case 404:
                console.error('请求的资源不存在');
                break;
            case 405:
                console.error('请求方法未允许');
                break;
            case 408:
                console.error('请求超时');
                break;
            case 500:
                console.error('服务器端出错');
                break;
            case 501:
                console.error('网络未实现');
                break;
            case 502:
                console.error('网络错误');
                break;
            case 503:
                console.error('服务不可用');
                break;
            case 504:
                console.error('网络超时');
                break;
            case 505:
                console.error('http版本不支持该请求');
                break;
            default:
                console.error(`连接错误${res.status}`);
        }
    }
}
