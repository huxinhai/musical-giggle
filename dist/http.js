import { Request } from './reauest';
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
