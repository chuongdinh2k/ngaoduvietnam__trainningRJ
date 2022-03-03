import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IAuth, ILogin } from "@types";
import { authApi } from "@api";
import { RootState } from ".";

export const login = createAsyncThunk("auth/login", async (values: ILogin, { rejectWithValue }) => {
    try {
        const res = await authApi.login(values);
        return res.data as IAuth;
    } catch (err: any) {
        return rejectWithValue(err);
    }
});
interface IState {
    auth: IAuth | null;
    isRemember?: boolean;
    isLoading: boolean;
    error: string;
    tokenInfoAuth: string;
    userInfo: any | null;
}
const initialState: IState = {
    auth: null,
    isRemember: false,
    isLoading: false,
    error: "",
    tokenInfoAuth: "",
    userInfo: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        logout: (state) => {
            (state.tokenInfoAuth = ""), (state.userInfo = null);
        },
    },
    extraReducers: (builder) => {
        // login
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action: { payload: any }) => {
            state.userInfo = action.payload;
            state.tokenInfoAuth = action.payload.token;
            state.isLoading = false;
        });
        builder.addCase(login.rejected, (state) => {
            state.auth = null;
            state.isLoading = false;
        });
    },
});
export const selectAuth = (state: RootState) => state.auth;
export const { logout } = authSlice.actions;
export default authSlice.reducer;
