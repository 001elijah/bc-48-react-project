import { createSlice } from "@reduxjs/toolkit";
import { addBalance, getCurrentUserInfo, login, logout, register } from "redux/operations/authOperations";
// import { currentUserLogout, getCurrentUserData, login, signup } from './authOperations';
const authSlice = createSlice({
    name: 'authorized',
    initialState: {
        user: { name: null, email: null, balance: 0 },
        token: null,
        authorized: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, { payload }) => {
                state.user = payload.user;
                state.token = payload.token;
                state.authorized = true;
            })
            .addCase(login.fulfilled, (state, { payload }) => {
                state.token = payload.token;
                state.authorized = true;
            })
            .addCase(getCurrentUserInfo.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.authorized = true;
            })
            .addCase(logout.fulfilled, state => {
                state.user.name = null;
                state.user.email = null;
                state.token = null;
                state.authorized = false;
            })
            .addCase(addBalance.fulfilled, (state, { payload }) => {
                state.user = payload;
            })
            .addCase(getCurrentUserInfo.rejected, state => {
                state.token = null;
            })
            .addMatcher(
                action => action.type.endsWith('/fulfilled'),
                state => {
                    state.error = null;
                }
            )
            .addMatcher(
                action => action.type.endsWith('/rejected'),
                (state, { payload }) => {
                    state.error = payload;
                }
        )
    }
});

export default authSlice.reducer;