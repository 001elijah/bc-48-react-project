import { createSlice } from '@reduxjs/toolkit';
import {
  prePostPlan,
  postPlan,
  getPlan,
  putPlan,
} from 'redux/operations/personalPlanOperations';

const personalPlanSlice = createSlice({
  name: 'personalPlan',
  initialState: {
    salary: 0,
    passiveIncome: 0,
    savings: 0,
    cost: 0,
    footage: 0,
    procent: 0,
    year: 0,
    month: 0,
    isPersonalPlanExists: false
  },
  extraReducers: builder => {
    builder
      .addCase(prePostPlan.fulfilled, (state, { payload }) => {
        state.salary = payload.salary;
        state.passiveIncome = payload.passiveIncome;
        state.savings = payload.savings;
        state.cost = payload.cost;
        state.footage = payload.footage;
        state.procent = payload.procent;
        state.year = payload.year;
        state.month = payload.month;
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
        return {
          ...state,
          ...payload
      }
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
      })},
});

export default personalPlanSlice.reducer;
