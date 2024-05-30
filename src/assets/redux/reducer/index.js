import { combineReducers } from "redux";
import { DataReducer } from "./reducer";

export const rootReducer = combineReducers({
    data : DataReducer
})