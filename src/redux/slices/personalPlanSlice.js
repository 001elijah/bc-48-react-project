import { createSlice } from "@reduxjs/toolkit";
import { prePostPlan, postPlan, getPlan, putPlan } from "redux/operations/personalPlanOperations";

const personalPlanSlice = createSlice({
    name: 'personalPlan',
    initialState: {
        salary: '123123',
        passiveIncome: '123',
        savings: '123123',
        cost: '123123',
        footage: '123123',
        procent: '123',
        year: '123123',
        month: '12313'
    },
    extraReducers: (builder) => {
        builder
            .addCase(prePostPlan.fulfilled, (state, { payload }) => {
                state.salary = payload.salary;
                state.passiveIncome = payload.passiveIncome;
                state.savings = payload.savings;
                state.cost = payload.cost;
                state.footage = payload.footage;
                state.procent = payload.procent;
            })
            .addCase(postPlan.fulfilled, (state, { payload }) => {
                state.salary = payload.salary;
                state.passiveIncome = payload.passiveIncome;
                state.savings = payload.savings;
                state.cost = payload.cost;
                state.footage = payload.footage;
                state.procent = payload.procent;
                state.year = payload.year;
                state.month = payload.month;
            })
            .addCase(getPlan.fulfilled, (state, { payload }) => {
                state.salary = payload.salary;
                state.passiveIncome = payload.passiveIncome;
                state.savings = payload.savings;
                state.cost = payload.cost;
                state.footage = payload.footage;
                state.procent = payload.procent;
                state.year = payload.year;
                state.month = payload.month;
            })
            .addCase(putPlan.fulfilled, (state, { payload }) => {
                state.salary = payload.salary;
                state.passiveIncome = payload.passiveIncome;
                state.savings = payload.savings;
                state.cost = payload.cost;
                state.footage = payload.footage;
                state.procent = payload.procent;
                state.year = payload.year;
                state.month = payload.month;
            })
    }
});

export default personalPlanSlice.reducer;