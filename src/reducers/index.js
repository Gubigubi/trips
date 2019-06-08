import {combineReducers} from 'redux'
import tripsReducer from './tripsReducer'
const Reducer = combineReducers({
    trips: tripsReducer
})
export default Reducer