import {SAVE_TITLE, CHANGE_START_DATE, CHANGE_END_DATE} from '../constants'

const initState = [
    {
        id: Math.random(),
        city: 'New York',
        dateStart : new Date(),
        dateEnd : new Date()
    },
    {
        id: Math.random(),
        city: 'Tokyo',
        dateStart : new Date(),
        dateEnd : new Date()
    },
    {
        id: Math.random(),
        city: 'London',
        dateStart : new Date(),
        dateEnd : new Date()
    }
];

export default (state = initState, action) => {
    switch(action.type) {
        
        case SAVE_TITLE:
            let changdTitle = state.map(item => {
                    if(item.id !== action.payload.id) return item
                    return { ...item, city: action.payload.title}
                } )
            return [...changdTitle]

        case CHANGE_START_DATE:   
            let changedStartDate = state.map(item => {
                if(item.id !== action.payload.id) return item
                return { ...item, dateStart: action.payload.date} 
            } ).sort((a,b) => a.dateStart - b.dateStart)
            return [...changedStartDate]

        case CHANGE_END_DATE:   
            let changedEndDate = state.map(item => {
                if(item.id !== action.payload.id) return item
                return { ...item, dateEnd: action.payload.date} 
            } )
            return [...changedEndDate]

        default:
            return state
    }
}