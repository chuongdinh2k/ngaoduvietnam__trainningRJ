import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { IAuth, ILogin, IRegister } from "@types";
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

export const register = createAsyncThunk(
    "auth/register",
    async (values: IRegister, { rejectWithValue }) => {
        try {
            const res = await authApi.register(values);
            return res.data as IAuth;
        } catch (err: any) {
            return rejectWithValue(err);
        }
    }
);

interface IState {
    auth: IAuth | null;
    isRemember?: boolean;
    isLoading: boolean;
    error: string;
    tokenInfoAuth: string;
    userInfo: any | null;
    message?: string;
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
        // register
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
            state.message = "";
            state.error = "";
        });
        builder.addCase(register.fulfilled, (state, action: { payload: any }) => {
            state.message = action.payload.message;
            state.isLoading = false;
        });
        builder.addCase(register.rejected, (state) => {
            state.auth = null;
            state.isLoading = false;
            state.error = `Something is wrong! please try again with a different email or password`;
        });
    },
});
export const selectAuth = (state: RootState) => state.auth;
export const { logout } = authSlice.actions;
export default authSlice.reducer;
