import { del } from "../http/http";
export const unsubscribe = (data) => del(`/userService/signals/unsubscribe/${data.id}`);
