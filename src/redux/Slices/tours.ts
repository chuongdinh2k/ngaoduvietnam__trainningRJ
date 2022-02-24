import { dataTours } from "@demos";
import { createSlice } from "@reduxjs/toolkit";

import { IDataTour } from "@types";
import { RootState } from ".";

interface IState {
    dataToursList: Array<IDataTour>;
}

const initialState: IState = {
    dataToursList: dataTours,
};

const tourSlice = createSlice({
    name: "tours",
    initialState: initialState,
    reducers: {},
});

export const selectTour = (state: RootState) => state.tours;
export default tourSlice.reducer;
