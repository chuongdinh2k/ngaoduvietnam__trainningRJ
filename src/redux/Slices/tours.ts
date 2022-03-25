import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

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

export interface MyError {
    message: unknown;
}

export const getListTours = createAsyncThunk("tours/getList", async (pagination: IPagination) => {
    try {
        const res = await toursApi.getListTours(pagination);
        return res.data;
    } catch (error) {
        if (axios.isAxiosError(error) && error.response) {
            const errorMessage =
                (error?.response?.data as MyError).message || error.message || "There was an error";
            toast.error(errorMessage as string);
            throw new Error(errorMessage as string);
        }
    }
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
    currentPage?: number;
    totalPage?: number;
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
            state.dataToursList = action.payload.tours;
            state.totalPage = action.payload.pages;
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
