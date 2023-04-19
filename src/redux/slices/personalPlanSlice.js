import { createSlice } from "@reduxjs/toolkit";

const personalPlanSlice = createSlice({
    name: 'personalPlan',
    initialState: {
        salary: null,
        passiveIncome: null,
        savings: null,
        cost: null,
        footage: null,
        procent: null,
    },
});

export default personalPlanSlice.reducer;