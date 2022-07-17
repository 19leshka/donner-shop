import {
    ADD_DONNER, CLEAR_CART,
    DECREMENT_DONNER, DELETE_ITEMS_GROUP,
    INCREMENT_DONNER,
    SET_ITEM_COUNT,
    SET_TOTAL_COUNT,
    SET_TOTAL_PRICE
} from "../actions/cart";


const initialState = {
    items: {

    },
    itemsCount: {

    },
    totalPrice: 0,
    totalCount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.payload
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload
            }
        case ADD_DONNER:
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.key] : !state.items[action.payload.key]
                        ? [action.payload]
                        : [...state.items[action.payload.key], action.payload]
                },
                totalCount: +state.totalCount + 1,
                totalPrice: +state.totalPrice + +action.payload.price
            }
        case SET_ITEM_COUNT:
            return {
                ...state,
                itemsCount: {
                    ...state.itemsCount,
                    [action.payload.id]: action.payload.count
                }
            }
        case INCREMENT_DONNER:
            state.itemsCount[action.payload.id]++;
            state.items[action.payload.key].push(state.items[action.payload.key][0]);
            return {
                ...state,
                totalCount: +state.totalCount + 1
            }
        case DECREMENT_DONNER:
            if(state.itemsCount[action.payload.id] === 1) {
                delete state.itemsCount[action.payload.id]
            }else{
                state.itemsCount[action.payload.id]--
            }

            if(state.items[action.payload.key].length === 1) {
                delete state.items[action.payload.key];
            }else{
                state.items[action.payload.key].shift()
            }
            return {
                ...state,
                totalCount: +state.totalCount - 1
            }
        case CLEAR_CART:
            return {
                ...state,
                items: {},
                itemsCount: {},
                totalPrice: 0,
                totalCount: 0
            }
        case DELETE_ITEMS_GROUP:
            const deletedItems = state.items[action.payload.key].length;
            state.itemsCount[action.payload.id] -= deletedItems;
            delete state.items[action.payload.key];
            return {
                ...state
            }
        default:
            return state
    }
}

export default cartReducer;