import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
};

export const loaderSlice = createSlice({
    name: 'loader',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder
            .addMatcher(
                action => (!action.type.startsWith('personalPlan/prePost') && action.type.endsWith('/pending')),
                state => {
                    state.isLoading = true;
                }
            )
            .addMatcher(
                action => (
                    action.type.endsWith('/rejected') ||
                    action.type.endsWith('/fulfilled')),
                (state) => {
                    state.isLoading = false;
                }
            )
    }
});

export const { setLoading } = loaderSlice.actions;
export default loaderSlice.reducer;