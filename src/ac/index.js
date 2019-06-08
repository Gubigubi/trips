import {SAVE_TITLE, CHANGE_START_DATE, CHANGE_END_DATE} from '../constants'

export const saveTitleTrip = (title,id) => {
    return {
        type: SAVE_TITLE,
        payload: {id,title}
    }
}
export const saveDateTrip = (id, type, date) => {
    return {
        type: (type === 'start') ? CHANGE_START_DATE : CHANGE_END_DATE,
        payload: {id, date}
    } 
}