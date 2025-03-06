import { patch } from "../http/http";
export const updateSignals = (data) => patch(`/userService/signals/updateSignals/${data.id}`, { strategyArray: data.strategyArray });
