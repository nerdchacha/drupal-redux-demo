import {
    FETCH_USERS_STARTED,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILED
} from '../action'

const initialState = {
    isFetching: false,
    list: [],
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS_STARTED:
            return {
                isFetching: true,
                list: state.list
            }
        case FETCH_USERS_SUCCESS:
            return {
                isFetching: false,
                list: action.data,
            }
        case FETCH_USERS_FAILED:
            return {
                isFetching: false,
                list: state.list,
            }
        default:
            return state
    }
}