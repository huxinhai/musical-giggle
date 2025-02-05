import { post } from "./http/http";
export const getAllOccupationInfo = (data) => post('/userService/getAllOccupationInfo', data);
