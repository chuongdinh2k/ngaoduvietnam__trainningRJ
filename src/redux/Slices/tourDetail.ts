import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import { toursApi } from "@api";
import { IComment } from "@types";

interface IValues {
    id: string;
    value: IComment;
}
export const getListTours = createAsyncThunk("tourDetail/viewDetail", async (values: IValues) => {
    const res = await toursApi.commentTour(values.id, values.value);
    return res.data;
});

interface IState {
    comments?: IComment[];
}
const initialState: IState = {
    comments: [],
};
const detailTour = createSlice({
    name: "tourDeatil",
    initialState: initialState,
    reducers: {},
});
