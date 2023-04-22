import { createSlice } from "@reduxjs/toolkit";
import { addBalance, getCurrentUserInfo, login, logout, register } from "redux/operations/authOperations";
// import { currentUserLogout, getCurrentUserData, login, signup } from './authOperations';
const authSlice = createSlice({
    name: 'authorized',
    initialState: {
        user: { name: null, email: null, balance: null },
        token: null,
        authorized: false,
        error: null,
        isLoading: null
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
                action => action.type.endsWith('/pending'),
                state => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                action => action.type.endsWith('/fulfilled'),
                state => {
                    state.isLoading = false;
                    state.error = null;
                }
            )
            .addMatcher(
                action => (
                    action.type.startsWith('cashflow') ||
                    action.type.startsWith('categories') ||
                    action.type.startsWith('dynamics') ||
                    action.type.startsWith('personalPlan') ||
                    action.type.startsWith('auth')) &&
                    action.type.endsWith('/rejected'),
                (state, { payload }) => {
                    state.isLoading = false;
                    state.error = payload;
                }
        )
    }
});

export default authSlice.reducer;