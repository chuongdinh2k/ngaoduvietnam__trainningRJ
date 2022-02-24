import { combineReducers } from "redux";
import { AnyAction, Reducer } from "@reduxjs/toolkit";

import appReducer from "./app";
import tourReducer from "./tours";

export * from "./app";
export * from "./tours";

const productReducer = combineReducers({
    app: appReducer,
    tours: tourReducer,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    return productReducer(state, action);
};
export default rootReducer;
