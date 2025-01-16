import axios, { type AxiosResponse } from 'axios';
import type { AxiosInstance } from 'axios';

type Fn = () => string | Promise<string>

function toPromise(fn: Fn): Promise<string> {
    const result = fn()

    // 如果返回值不是 Promise，则用 Promise.resolve() 包装
    return result instanceof Promise ? result : Promise.resolve(result)
}


export class Request {
    public static axiosInstance: AxiosInstance
    public static getToken:Promise<string>
    public static UnauthorizedCb?:() => void

    public static init(baseURL:string,getToken:Fn,UnauthorizedCb?:() => void) {
        this.axiosInstance = axios.create({
            baseURL,
            timeout: 60000,
            withCredentials: !0,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        this.initInterceptors()
        this.UnauthorizedCb = UnauthorizedCb
        this.getToken = toPromise(getToken)
        return axios;
    }

    private static initInterceptors() {
        this.axiosInstance.interceptors.request.use(
            async (config) => {
                // config.data = qs.stringify(config.data)
                // console.log(config,'@')
                config.headers['token'] = await this.getToken || ''
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
                    this.UnauthorizedCb?.()
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
