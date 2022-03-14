import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { IDataTour } from "@types";
import { toursApi } from "@api";
import { RootState } from ".";

interface IPagination {
    page?: number;
    limit?: number;
}
export const getListTours = createAsyncThunk("tours/getList", async (values: IPagination) => {
    const res = await toursApi.getListTours(values);
    return res.data;
});

interface IState {
    dataToursList: Array<IDataTour>;
}

const initialState: IState = {
    dataToursList: [],
};

const tourSlice = createSlice({
    name: "tours",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        //get list
        builder.addCase(getListTours.fulfilled, (state, action: { payload: any }) => {
            state.dataToursList = action.payload;
        });
    },
});

export const selectTour = (state: RootState) => state.tours;
export default tourSlice.reducer;
