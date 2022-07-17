import { combineReducers } from "redux";
import filtersReducer from "./filters"
import donersReducer from "./doners"
import cartReducer from "./cart";

const rootReducer = combineReducers({
    filters: filtersReducer,
    doners: donersReducer,
    cart: cartReducer
})

export default rootReducer;