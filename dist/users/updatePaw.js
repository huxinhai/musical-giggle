import { put } from "../http/http";
export const updatePaw = (data) => {
    const { account, pwd, code } = data;
    return put(`/users/updatePwd/${account}`, { pwd, code });
};
