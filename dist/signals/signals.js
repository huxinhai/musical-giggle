import { patch } from "../http/http";
export const updateSignals = (data) => patch(`/userService/updateSignals/${data.id}`, { strategyArray: data.strategyArray });
