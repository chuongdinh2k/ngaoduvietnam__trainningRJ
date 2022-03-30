import { DateRange } from "@mui/lab/DateRangePicker";

import { hotelsApi } from "@api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IHotel } from "@types";
import { RootState } from ".";

interface IPagination {
    page?: number;
    limit?: number;
}

export const getListHotels = createAsyncThunk("hotel/getList", async (values: IPagination) => {
    const res = await hotelsApi.getListHotels(values);
    return res.data;
});

interface IBookingHotelForm {
    duration?: string;
    typeOfTour?: string;
    title?: string;
    location?: string;
    startDate?: Date;
    dateRange?: DateRange<unknown>;
    endDate?: string | number;
    group?: string;
    standardRoom?: number;
    familySuite?: number;
    breakFast?: number;
    total?: number;
}
interface IState {
    dataHotelsList: Array<IHotel>;
    loading?: boolean;
    bookingHotel: IBookingHotelForm;
    currentPage?: number;
    totalPage?: number;
}

const initialState: IState = {
    dataHotelsList: [],
    bookingHotel: {},
    loading: false,
};

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: initialState,
    reducers: {
        setBookingForm: (state, action: PayloadAction<IBookingHotelForm>) => {
            state.bookingHotel = action.payload;
        },
        resetForm: (state) => {
            state.bookingHotel = {};
        },
        setTotal: (state) => {
            state.totalPage = 0;
        },
    },
    extraReducers: (builder) => {
        //get list
        builder.addCase(getListHotels.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getListHotels.fulfilled, (state, action: { payload: any }) => {
            state.dataHotelsList = action.payload.hotels;
            state.totalPage = action.payload.pages;
            state.loading = false;
        });
        builder.addCase(getListHotels.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const { setBookingForm, resetForm, setTotal } = hotelsSlice.actions;
export const selectHotel = (state: RootState) => state.hotels;
export default hotelsSlice.reducer;
