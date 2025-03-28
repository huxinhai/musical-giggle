import { post } from "../http/http";
export const divinationGetH5Version = (data = {}) => post('/divinationService/divination/getH5Version', data);
