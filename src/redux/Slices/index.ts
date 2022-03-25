import { combineReducers } from "redux";
import { AnyAction, Reducer } from "@reduxjs/toolkit";

import appReducer from "./app";
import tourReducer from "./tours";
import authReducer from "./auth";
import hotelReducer from "./hotels";
import hotelDetail from "./hotelDetail";
import tourDetail from "./tourDetail";

export * from "./hotels";
export * from "./app";
export * from "./tours";
export * from "./auth";
export * from "./hotelDetail";
export * from "./tourDetail";

const productReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    tours: tourReducer,
    hotels: hotelReducer,
    detailHotel: hotelDetail,
    detailTour: tourDetail,
});

export type RootState = ReturnType<typeof productReducer>;

const rootReducer: Reducer = (state: RootState, action: AnyAction) => {
    return productReducer(state, action);
};
export default rootReducer;
