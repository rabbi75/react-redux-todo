import {ADDED, ALLCOMPLETED,COLORSELECTED,CLEARCOMPLETED,DELETED,TOGGLE} from "./actionTypes"
export const added = (todoText) => {
    return{
        type: ADDED,
        payload: todoText,
    }
}
export const toggle = (todoId) => {
    return{
        type: TOGGLE,
        payload: todoId,
    }
}
export const colorSelected = (todoId, color) => {
    return{
        type: COLORSELECTED,
        payload: {
            todoId,
            color
        },
    }
}
export const deleted = (todoId) => {
    return{
        type: DELETED,
        payload: todoId,
    }
}
export const allCompleted = () => {
    return{
        type: ALLCOMPLETED,
    }
}
export const clearCompleted = () => {
    return{
        type: CLEARCOMPLETED,
    }
}