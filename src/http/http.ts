import { Request } from './request'
import type { AxiosRequestConfig } from 'axios'

export const post = <T = any, D = any>(url: string, data?: D) => {
    const config: AxiosRequestConfig = {
        method: 'POST',
        url,
    };
    if (data) config.data = data
    return Request.axiosInstance<T>(config) as Promise<T>
}

export const get = <T = any, D = any>(url: string, data?: D) => {
    const config: AxiosRequestConfig = {
        method: 'GET',
        url,
    };
    if (data) config.params = data;
    return Request.axiosInstance<T>(config) as Promise<T>
}

export const put = <T = any, D = any>(url: string, data?: D) => {
    const config: AxiosRequestConfig = {
        method: 'PUT',
        url,
    };
    if (data) config.data = data
    return Request.axiosInstance<T>(config) as Promise<T>
}

export const del = <T = any, D = any>(url: string, data?: D) => {
    const config: AxiosRequestConfig = {
        method: 'DELETE',
        url,
    };
    if (data) config.data = data
    return Request.axiosInstance<T>(config) as Promise<T>
}


