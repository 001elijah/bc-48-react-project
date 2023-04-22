import { createSlice } from '@reduxjs/toolkit';
import { getDailyLimit } from 'redux/operations/cashflowOperations';

const cashflowSlice = createSlice({
  name: 'cashflow',
  initialState: {
    balance: 0,
    monthLimit: null,
    dailyLimit: null,
  },
  extraReducers: builder => {
    builder.addCase(getDailyLimit.fulfilled, (state, { payload }) => {
      state.monthLimit = payload.monthLimit;
      state.dailyLimit = payload.dailyLimit;
    });
  },
});

export default cashflowSlice.reducer;
