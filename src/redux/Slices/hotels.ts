import { hotelsApi } from "@api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IHotel } from "@types";
import { filterArry } from "@utils";
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
    date?: string;
    group?: string;
    standardRoom?: number;
    familySuite?: number;
    breakFast?: number;
    total?: number;
}
interface IState {
    dataHotelsList: Array<IHotel>;
    bookingHotel: IBookingHotelForm;
}

const initialState: IState = {
    dataHotelsList: [],
    bookingHotel: {},
};

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: initialState,
    reducers: {
        filterHotel: (state, action: PayloadAction<any>) => {
            state.dataHotelsList = filterArry(state.dataHotelsList, action.payload);
        },
        setBookingForm: (state, action: PayloadAction<any>) => {
            state.bookingHotel = action.payload;
        },
        resetForm: (state) => {
            state.bookingHotel = {};
        },
    },
    extraReducers: (builder) => {
        //get list
        builder.addCase(getListHotels.fulfilled, (state, action: { payload: Array<IHotel> }) => {
            state.dataHotelsList = action.payload;
        });
    },
});

export const { setBookingForm, resetForm, filterHotel } = hotelsSlice.actions;
export const selectHotel = (state: RootState) => state.hotels;
export default hotelsSlice.reducer;
