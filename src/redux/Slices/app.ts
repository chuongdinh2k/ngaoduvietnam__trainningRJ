import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from ".";

export interface ISnackBar {
    message?: string;
    show?: boolean;
    anchorOrigin?: any;
    messageType?: any;
}
export interface ILightBox {
    show: boolean;
    listImages?: Array<string>;
}
interface IState {
    loading: boolean;
    snackBar: ISnackBar;
    popUpLightBox: ILightBox;
}

const initialState: IState = {
    loading: false,
    snackBar: {
        show: true,
        message: "You are doing alert",
        messageType: undefined,
    },
    popUpLightBox: {
        show: false,
        listImages: [],
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
        setPopUpLightBox: (state, action: PayloadAction<Array<string>>) => {
            state.popUpLightBox = {
                show: true,
                listImages: action.payload,
            };
        },
        resetPopUpLightBox: (state) => {
            state.popUpLightBox = {
                show: false,
                listImages: [],
            };
        },
    },
});

export const { setLoading, resetSnackBar, setPopUpLightBox, resetPopUpLightBox } = appSlice.actions;

export const selectApp = (state: RootState) => state.app;

export default appSlice.reducer;
