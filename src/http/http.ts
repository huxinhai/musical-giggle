import type { Signal } from '../global';
import { Request } from './request'
import type { AxiosRequestConfig } from 'axios'

export const post = <T = any, D = any>(url: string, data?: D & Signal) => {
    const { signal, ...rest } = data || {}
    const config: AxiosRequestConfig = {
        method: 'POST',
        url,
        signal: signal
    };
    if (rest) config.data = rest
    return Request.axiosInstance<T>(config) as Promise<T>
}

export const get = <T = any, D = any>(url: string, data?: D & Signal) => {
    const { signal, ...rest } = data || {}
    const config: AxiosRequestConfig = {
        method: 'GET',
        url,
        signal: signal
    };
    if (rest) config.params = rest;
    return Request.axiosInstance<T>(config) as Promise<T>
}

export const put = <T = any, D = any>(url: string, data?: D & Signal) => {
    const { signal, ...rest } = data || {}
    const config: AxiosRequestConfig = {
        method: 'PUT',
        url,
        signal: signal
    };
    if (rest) config.data = rest
    return Request.axiosInstance<T>(config) as Promise<T>
}

export const patch = <T = any, D = any>(url: string, data?: D & Signal) => {
    const { signal, ...rest } = data || {}
    const config: AxiosRequestConfig = {
        method: 'PATCH',
        url,
        signal: signal
    };
    if (rest) config.data = rest
    return Request.axiosInstance<T>(config) as Promise<T>
}

export const del = <T = any, D = any>(url: string, data?: D & Signal) => {
    const { signal, ...rest } = data || {}
    const config: AxiosRequestConfig = {
        method: 'DELETE',
        url,
        signal: signal
    };
    if (rest) config.data = rest
    return Request.axiosInstance<T>(config) as Promise<T>
}


