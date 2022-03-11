import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { IDataTour } from "@types";
import { filterArry } from "@utils";
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
// WHAT: action view tour detail
export const viewTourDetail = createAsyncThunk(
    "tours/viewDetail",
    async (id: string, { rejectWithValue }) => {
        try {
            const res = await toursApi.viewListDetail(id);
            return res.data;
        } catch (err: any) {
            return rejectWithValue(err);
        }
    }
);

interface IState {
    dataToursList: Array<IDataTour>;
    filterData: Array<IDataTour>;
}

const initialState: IState = {
    dataToursList: [],
    filterData: [],
};

const tourSlice = createSlice({
    name: "tours",
    initialState: initialState,
    reducers: {
        filterTour: (state, action: PayloadAction<any>) => {
            state.filterData = filterArry(state.dataToursList, action.payload);
        },
    },
    extraReducers: (builder) => {
        //get list
        builder.addCase(getListTours.fulfilled, (state, action: { payload: any }) => {
            state.dataToursList = action.payload;
        });
    },
});

export const selectTour = (state: RootState) => state.tours;
export const { filterTour } = tourSlice.actions;
export default tourSlice.reducer;
