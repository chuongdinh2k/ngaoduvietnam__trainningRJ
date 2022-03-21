import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { IDataTour } from "@types";
import { toursApi } from "@api";
import { RootState } from ".";

export interface IPagination {
    page?: number;
    limit?: number;
}
interface IFilter {
    location?: string;
}
interface IValues {
    pagination?: IPagination;
    filter?: IFilter;
}
export const getListTours = createAsyncThunk("tours/getList", async (pagination: IPagination) => {
    const res = await toursApi.getListTours(pagination);
    return res.data;
});
export const getListFilterTours = createAsyncThunk(
    "tours/getListFilter",
    async (values: IValues) => {
        const res = await toursApi.getListFilterTours(values.pagination, values.filter);
        return res.data;
    }
);
interface IState {
    dataToursList: Array<IDataTour>;
    loading?: boolean;
}

const initialState: IState = {
    dataToursList: [],
    loading: false,
};

const tourSlice = createSlice({
    name: "tours",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        //get list
        builder.addCase(getListTours.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getListTours.fulfilled, (state, action: { payload: any }) => {
            state.dataToursList = action.payload;
            state.loading = false;
        });
        builder.addCase(getListTours.rejected, (state) => {
            state.loading = false;
        });
        // get list search
        builder.addCase(getListFilterTours.fulfilled, (state, action: { payload: any }) => {
            state.dataToursList = action.payload;
        });
    },
});

export const selectTour = (state: RootState) => state.tours;
export default tourSlice.reducer;
