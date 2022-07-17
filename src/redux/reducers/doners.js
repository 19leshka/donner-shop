import {SET_DONERS, SET_LOADED} from './../actions/doners';

const initialState = {
    items: [],
    isLoaded: false
}

const donersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DONERS:
            return {...state, items: action.payload, isLoaded: true}
        case SET_LOADED:
            return {...state, isLoaded: action.payload}
        default:
            return state
    }
}

export default donersReducer;