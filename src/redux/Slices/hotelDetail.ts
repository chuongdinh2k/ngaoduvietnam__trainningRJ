import { hotelsApi } from "@api";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { IHotel } from "@types";
import { RootState } from ".";

interface IState {
    loading?: boolean;
    hotel?: IHotel;
    relatedHotel?: Array<IHotel>;
}

const initialState: IState = {
    hotel: {},
    relatedHotel: [],
    loading: false,
};
export const viewDetailHotel = createAsyncThunk("hotelDetail/view", async (id: string) => {
    const res = await hotelsApi.viewListDetail(id);
    return res.data;
});
const hotelDetail = createSlice({
    name: "hotelDetail",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(viewDetailHotel.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(viewDetailHotel.fulfilled, (state, action: { payload: any }) => {
            state.loading = true;
            state.hotel = action.payload.hotel;
            state.relatedHotel = action.payload.relatedHotel;
        });
    },
});
export const selectDetailHotel = (state: RootState) => state.detailHotel;
export default hotelDetail.reducer;
