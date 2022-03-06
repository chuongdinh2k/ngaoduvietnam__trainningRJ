import { dataTours } from "@demos";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDataTour } from "@types";
import { filterArry } from "@utils";
import { RootState } from ".";

interface IState {
    dataToursList: Array<IDataTour>;
    filterData: Array<IDataTour>;
}

const initialState: IState = {
    dataToursList: dataTours,
    filterData: [],
};

const tourSlice = createSlice({
    name: "tours",
    initialState: initialState,
    reducers: {
        filterTour: (state, action: PayloadAction<any>) => {
            state.filterData = filterArry(state.dataToursList, action.payload);
            console.log(action.payload);
            console.log(state.dataToursList);
        },
    },
});

export const selectTour = (state: RootState) => state.tours;
export const { filterTour } = tourSlice.actions;
export default tourSlice.reducer;
