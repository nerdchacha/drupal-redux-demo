import { INCREMENT, DECREMENT, INCREMENTBYCOUNT } from '../action'

const initialState = {
    count: 0
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        case INCREMENTBYCOUNT:
            return {
                count: state.count + action.count
            }
        default:
            return initialState
    }
}