import counter from './counter'
import todos from './todo'
import { combineReducers } from 'redux'

export default combineReducers({
    counter,
    todos,
})