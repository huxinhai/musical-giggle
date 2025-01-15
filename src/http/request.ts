import axios, { type AxiosResponse } from 'axios';
import type { AxiosInstance } from 'axios';

export class Request {
    public static axiosInstance: AxiosInstance
    public static getToken:() => string

    public static init(baseURL:string,getToken:() => string) {
        this.axiosInstance = axios.create({
            baseURL,
            timeout: 60000,
            withCredentials: !0,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        this.initInterceptors()
        this.getToken = getToken
        return axios;
    }

    private static initInterceptors() {
        this.axiosInstance.interceptors.request.use(
            (config) => {
                // config.data = qs.stringify(config.data)
                // console.log(config,'@')
                config.headers['token'] = this.getToken() || ''
                return config
            },
            (error) => {
                return Promise.reject(error)
            },
        );

        this.axiosInstance.interceptors.response.use(
            (response: AxiosResponse) => {
                const { statusText, status,data } = response
                if (statusText === 'OK' || status === 200) {
                    return data
                } else {
                    return Promise.reject(data)
                }
            },
            (error) => {
                if (error.response.statusText === 'Unauthorized') {
                    // const t_data = getToken();
                    // sendLog({
                    //   type: 'error',
                    //   uid: t_data['username'] || '',
                    //   spm: 'login.out.expire.0',
                    //   extInfo: JSON.stringify({}),
                    // });
                    // window.localStorage.clear();
                }
                return Promise.reject(error.data)
            },
        );
    }
}
