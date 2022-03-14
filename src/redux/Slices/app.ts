import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";

export interface ISnackBar {
    message?: string;
    show?: boolean;
    anchorOrigin?: any;
    messageType?: any;
}
interface IState {
    loading: boolean;
    snackBar: ISnackBar;
}

const initialState: IState = {
    loading: false,
    snackBar: {
        show: true,
        message: "You are doing alert",
        messageType: undefined,
    },
};

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        resetSnackBar: (state) => {
            state.snackBar = {};
        },
    },
});

export const { setLoading, resetSnackBar } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
