export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENTBYCOUNT = 'INCREMENTBYCOUNT'
export const ADD_TODO = 'ADD_TODO'

export function increment () {
    return { type: INCREMENT }
}

export function decrement () {
    return { type: DECREMENT }
}

export function incrementByCount (count) {
    return {
        type:  INCREMENTBYCOUNT,
        count
    }
}

export function addTodo (todo) {
    return {
        type: ADD_TODO,
        payload: todo
    }
}
