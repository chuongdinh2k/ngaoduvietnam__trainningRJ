import { hotelsApi } from "@api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IHotel } from "@types";
import { RootState } from ".";

export const getListHotels = createAsyncThunk("hotel/getList", async () => {
    const res = await hotelsApi.getListHotels();
    return res.data;
});

interface IState {
    dataHotelsList: Array<IHotel>;
}

const initialState: IState = {
    dataHotelsList: [],
};

const hotelsSlice = createSlice({
    name: "hotels",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        //get list
        builder.addCase(getListHotels.fulfilled, (state, action: { payload: Array<IHotel> }) => {
            state.dataHotelsList = action.payload;
        });
    },
});

export const selectHotel = (state: RootState) => state.hotels;
export default hotelsSlice.reducer;
