import { createSlice } from '@reduxjs/toolkit';
import {
  prePostPlan,
  postPlan,
  getPlan,
  putPlan,
} from 'redux/operations/personalPlanOperations';
import { logout } from 'redux/operations/authOperations';

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
    isPersonalPlanExists: false,
    dateWhenPersonalPlanCreated: null,
  },
  extraReducers: builder => {
    builder
      .addCase(prePostPlan.fulfilled, (state, { payload }) => {
        return { ...state, ...payload };
      })
      .addCase(postPlan.fulfilled, (state, { payload }) => {
        return {
          ...state,
          ...payload,
          isPersonalPlanExists: true,
          dateWhenPersonalPlanCreated: new Date().toJSON().slice(0, 10),
        };
      })
      .addCase(getPlan.fulfilled, (state, { payload }) => {
        return { ...state, ...payload };
      })
      .addCase(putPlan.fulfilled, (state, { payload }) => {
        return { ...state, ...payload };
      })
      .addCase(logout.fulfilled, state => {
        state.cost = 0;
        state.footage = 0;
        state.isPersonalPlanExists = false;
        state.procent = 0;
      });
  },
});

export default personalPlanSlice.reducer;
