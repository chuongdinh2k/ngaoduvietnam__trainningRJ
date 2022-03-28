import { hotelsApi } from "@api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { IHotel } from "@types";
import { toast } from "react-toastify";
import { RootState } from ".";
import { REVIEW_SUCCESS, FAIL } from "@configs";

interface IReviewParams {
    id: string;
    values?: any;
}
interface IState {
    loading?: boolean;
    hotel: IHotel | undefined;
    relatedHotel?: Array<IHotel>;
    pageReview?: number;
    loadingReview?: boolean;
}

const initialState: IState = {
    hotel: {},
    relatedHotel: [],
    loading: false,
    pageReview: 1,
    loadingReview: false,
};
export const viewDetailHotel = createAsyncThunk("hotelDetail/view", async (id: string) => {
    const res = await hotelsApi.viewListDetail(id);
    return res.data;
});
export const submitReviewHotel = createAsyncThunk(
    "hotelDetail/postCommend",
    async (params: IReviewParams) => {
        try {
            const res = await hotelsApi.commentHotel(params.id, {
                rating: 8,
                title: "good",
                ...params.values,
            });
            toast.success(`${REVIEW_SUCCESS}`);
            return res.data.hotel as IHotel;
        } catch (err) {
            toast.error(`${FAIL}`);
        }
    }
);

const hotelDetail = createSlice({
    name: "hotelDetail",
    initialState: initialState,
    reducers: {
        changeReviewPagiantion: (state, action: PayloadAction<number>) => {
            state.pageReview = action.payload;
        },
        resetHotel: (state) => {
            state.hotel = {};
            state.relatedHotel = [];
            state.pageReview = 1;
        },
    },
    extraReducers: (builder) => {
        // WHAT: view detail
        builder.addCase(viewDetailHotel.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(viewDetailHotel.fulfilled, (state, action: PayloadAction<IState>) => {
            state.loading = false;
            state.hotel = action.payload?.hotel;
            state.relatedHotel = action.payload?.relatedHotel;
            state.pageReview =
                action.payload?.hotel?.reviews && action.payload?.hotel?.reviews.length && 1;
        });
        builder.addCase(viewDetailHotel.rejected, (state) => {
            state.loading = false;
        });
        // WHAT: submit a review
        builder.addCase(submitReviewHotel.pending, (state) => {
            state.loadingReview = true;
        });
        builder.addCase(
            submitReviewHotel.fulfilled,
            (state, action: PayloadAction<IHotel | undefined>) => {
                state.loadingReview = false;
                state.hotel = action.payload;
            }
        );
        builder.addCase(submitReviewHotel.rejected, (state) => {
            state.loadingReview = false;
        });
    },
});
export const { resetHotel, changeReviewPagiantion } = hotelDetail.actions;
export const selectDetailHotel = (state: RootState) => state.detailHotel;
export default hotelDetail.reducer;
