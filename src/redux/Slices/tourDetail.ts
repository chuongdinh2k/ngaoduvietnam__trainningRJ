import { toursApi } from "@api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { IDataTour } from "@types";
import { toast } from "react-toastify";
import { RootState } from ".";
import { REVIEW_SUCCESS, FAIL } from "@configs";
import axios from "axios";
import { MyError } from ".";

interface IReviewParams {
    id: string;
    values?: any;
}
interface IState {
    loading?: boolean;
    tour: IDataTour;
    relatedTour?: Array<IDataTour>;
    pageReview?: number;
    loadingReview?: boolean;
}
const initialState: IState = {
    tour: {},
    relatedTour: [],
    loading: false,
    pageReview: 1,
    loadingReview: false,
};
export const viewDetailTour = createAsyncThunk("tourDetail/view", async (id: string) => {
    try {
        const res = await toursApi.viewListDetail(id);
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
export const submitReviewTour = createAsyncThunk(
    "tourDetail/postCommend",
    async (params: IReviewParams) => {
        try {
            const res = await toursApi.commentTour(params.id, {
                rating: 7,
                title: "good",
                ...params.values,
            });
            toast.success(`${REVIEW_SUCCESS}`);
            return res.data.tour as IDataTour;
        } catch (err) {
            toast.error(`${FAIL}`);
        }
    }
);
const tourDetail = createSlice({
    name: "tourDetail",
    initialState: initialState,
    reducers: {
        changeReviewPagiantionTour: (state, action: PayloadAction<number>) => {
            state.pageReview = action.payload;
        },
        resetTour: (state) => {
            state.tour = {};
            state.relatedTour = [];
            state.pageReview = 1;
        },
    },
    extraReducers: (builder) => {
        // WHAT: view detail
        builder.addCase(viewDetailTour.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(viewDetailTour.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.tour = action.payload?.tour;
            state.relatedTour = action.payload?.relatedTour;
            state.pageReview = action.payload?.tour?.reviews.length === 0 ? 0 : 1;
        });
        builder.addCase(viewDetailTour.rejected, (state) => {
            state.loading = false;
        });
        // WHAT: submit a review
        builder.addCase(submitReviewTour.pending, (state) => {
            state.loadingReview = true;
        });
        builder.addCase(submitReviewTour.fulfilled, (state, action: PayloadAction<any>) => {
            state.tour = action.payload;
            state.loadingReview = false;
        });
        builder.addCase(submitReviewTour.rejected, (state) => {
            state.loadingReview = false;
        });
    },
});
export const { resetTour, changeReviewPagiantionTour } = tourDetail.actions;
export const selectDetailTour = (state: RootState) => state.detailTour;
export default tourDetail.reducer;
