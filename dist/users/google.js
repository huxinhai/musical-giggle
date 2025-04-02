import { post } from "../http/http";
export const getGoogleUserInfo = async (code) => post('/userService/users/google', {
    code
});
