export const FETCH_USERS_STARTED = 'FETCH_USERS_STARTED'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

export function fetchUsers () {
    return function (dispatch) {
        dispatch({ type: FETCH_USERS_STARTED})
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                dispatch({ type: FETCH_USERS_SUCCESS, data: data })
            })
            .catch((error) => {
                dispatch({ type: FETCH_USERS_FAILED })
            })
    }
}