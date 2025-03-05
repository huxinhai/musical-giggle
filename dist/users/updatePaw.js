import { patch } from "../http/http";
export const updatePwd = (data) => {
    const { account, pwd, code } = data;
    return patch(`/userService/h/users/updatePwd/${account}`, { pwd, code });
};
