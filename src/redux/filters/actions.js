import {STATUSCHAGNED,COLORCHANGED} from "./actionTypes"
export const colorChanged = (color,changeType) => {
    return{
        type: COLORCHANGED,
        payload: {
            color,
            changeType
        }
    }
}
export const statusChanged = (status) => {
    return{
        type: STATUSCHAGNED,
        payload: status
    }
}