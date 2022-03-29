import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

import { IDataTour } from "@types";
import { toursApi, IFilterListTour } from "@api";
import { RootState } from ".";
import { totalPageConvert } from "@utils";
import { LIMIT_RECORD_6 } from "@configs";

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

export const getListSearchTours = createAsyncThunk(
    "tours/getListSearch",
    async (values: IValues) => {
        const res = await toursApi.getListFilterTours(values.pagination, values.filter);
        return res.data;
    }
);

export const getListFilterTours = createAsyncThunk(
    "tours/getListFilter",
    async (values: IFilterListTour) => {
        const res = await toursApi.filterTours(values);
        return res.data.tours;
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
    reducers: {
        resetTotal: (state) => {
            state.totalPage = 0;
        },
    },
    extraReducers: (builder) => {
        //get list
        builder.addCase(getListTours.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getListTours.fulfilled, (state, action: { payload: IState }) => {
            state.dataToursList = action.payload.dataToursList;
            state.totalPage = action.payload.totalPage;
            state.loading = false;
        });
        builder.addCase(getListTours.rejected, (state) => {
            state.loading = false;
        });
        // get list search
        builder.addCase(getListSearchTours.fulfilled, (state, action: { payload: IState }) => {
            state.dataToursList = action.payload.dataToursList;
            state.totalPage = action.payload.totalPage;
        });
        // get list filter
        builder.addCase(getListFilterTours.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(
            getListFilterTours.fulfilled,
            (state, action: { payload: Array<IDataTour> }) => {
                state.dataToursList = action.payload;
                state.loading = false;
                state.totalPage = totalPageConvert(action.payload?.length, LIMIT_RECORD_6);
            }
        );
        builder.addCase(getListFilterTours.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { resetTotal } = tourSlice.actions;
export const selectTour = (state: RootState) => state.tours;
export default tourSlice.reducer;
