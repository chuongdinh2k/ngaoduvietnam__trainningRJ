import { combineReducers } from "redux";
import { AnyAction, Reducer } from "@reduxjs/toolkit";

import appReducer from "./app";
import tourReducer from "./tours";
import authReducer from "./auth";
import hotelReducer from "./hotels";

export * from "./hotels";
export * from "./app";
export * from "./tours";
export * from "./auth";

const productReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    tours: tourReducer,
    hotels: hotelReducer,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    return productReducer(state, action);
};
export default rootReducer;
