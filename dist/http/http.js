import { Request } from './request';
export const post = (url, data) => {
    const { signal, ...rest } = data || {};
    const config = {
        method: 'POST',
        url,
        signal: signal
    };
    if (rest)
        config.data = rest;
    return Request.axiosInstance(config);
};
export const get = (url, data) => {
    const { signal, ...rest } = data || {};
    const config = {
        method: 'GET',
        url,
        signal: signal
    };
    if (rest)
        config.params = rest;
    return Request.axiosInstance(config);
};
export const put = (url, data) => {
    const { signal, ...rest } = data || {};
    const config = {
        method: 'PUT',
        url,
        signal: signal
    };
    if (rest)
        config.data = rest;
    return Request.axiosInstance(config);
};
export const patch = (url, data) => {
    const { signal, ...rest } = data || {};
    const config = {
        method: 'PATCH',
        url,
        signal: signal
    };
    if (rest)
        config.data = rest;
    return Request.axiosInstance(config);
};
export const del = (url, data) => {
    const { signal, ...rest } = data || {};
    const config = {
        method: 'DELETE',
        url,
        signal: signal
    };
    if (rest)
        config.data = rest;
    return Request.axiosInstance(config);
};
