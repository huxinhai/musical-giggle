import { del } from "../http/http";
export const unsubscribe = (data) => del(`/userService/unsubscribe/${data.id}`);
