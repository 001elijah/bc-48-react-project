import { createSlice } from '@reduxjs/toolkit';
import { getDailyLimit } from 'redux/operations/cashflowOperations';

const cashflowSlice = createSlice({
  name: 'cashflow',
  initialState: {
    monthLimit: null,
    dailyLimit: null,
  },

  extraReducers: builder => {
    builder.addCase(getDailyLimit.fulfilled, (state, { payload }) => {
      return { ...state, ...payload };
    });
  },
});

export default cashflowSlice.reducer;
