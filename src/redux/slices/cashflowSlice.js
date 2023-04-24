import { createSlice } from '@reduxjs/toolkit';
import {
  // getDailyLimit,
  getLimitsAndTotals,
} from 'redux/operations/cashflowOperations';

const cashflowSlice = createSlice({
  name: 'cashflow',
  initialState: {
    monthLimit: null,
    dailyLimit: null,
  },

  extraReducers: builder => {
    builder.addCase(getLimitsAndTotals.fulfilled, (state, { payload }) => {
      state.monthLimit = payload.monthLimit - payload.totalByMounth;
      state.dailyLimit = Math.round(payload.dailyLimit) - payload.totalByDay;
    });
  },
});

export default cashflowSlice.reducer;
