import { Request } from './request';
export const post = (url, data) => {
    const config = {
        method: 'POST',
        url,
    };
    if (data)
        config.data = data;
    return Request.axiosInstance(config);
};
export const get = (url, data) => {
    const config = {
        method: 'GET',
        url,
    };
    if (data)
        config.params = data;
    return Request.axiosInstance(config);
};
export const put = (url, data) => {
    const config = {
        method: 'PUT',
        url,
    };
    if (data)
        config.data = data;
    return Request.axiosInstance(config);
};
export const del = (url, data) => {
    const config = {
        method: 'DELETE',
        url,
    };
    if (data)
        config.data = data;
    return Request.axiosInstance(config);
};
