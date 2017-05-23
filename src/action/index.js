export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENTBYCOUNT = 'INCREMENTBYCOUNT'

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
