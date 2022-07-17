export const SET_TOTAL_PRICE = "SET_TOTAL_PRICE"
export const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
export const ADD_DONNER = "ADD_DONNER"
export const INCREMENT_DONNER = "INCREMENT_DONNER"
export const DECREMENT_DONNER = "DECREMENT_DONNER"
export const SET_ITEM_COUNT = "SET_ITEM_COUNT"
export const CLEAR_CART = "CLEAR_CART"
export const DELETE_ITEMS_GROUP = "DELETE_ITEMS_GROUP"

export const setTotalPrice = (payload) => ({
    type: SET_TOTAL_PRICE,
    payload
})

export const setTotalCount = (payload) => ({
    type: SET_TOTAL_COUNT,
    payload
})

export const addDoner = (payload) => ({
    type: ADD_DONNER,
    payload
})

export const setItemCount = (payload) => ({
    type: SET_ITEM_COUNT,
    payload
})

export const incrementDoner = (payload) => ({
    type: INCREMENT_DONNER,
    payload
})

export const decrementDoner = (payload) => ({
    type: DECREMENT_DONNER,
    payload
})

export const clearCart = () => ({
    type: CLEAR_CART
})

export const deleteItemsGroup = (payload) => ({
    type: DELETE_ITEMS_GROUP,
    payload
})

