import { refType } from '@mui/utils';
import { createSlice } from '@reduxjs/toolkit';
import {
  getCustomerSavingsForChart,
  addOrChangeImageOfFlat,
} from '../operations/dynamicsOperations';

const dynamicsDataSlice = createSlice({
  name: 'dynamicsData',
  initialState: {
    statByYear: {
      expense: null,
      income: null,
      month: null,
    },
    year: null,
    month: null,
    accumulatedProc: null,
    accumulatedUah: null,
    squareMeters: null,
    accumToOneMoreMeters: null,
    imageUrl: null,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(getCustomerSavingsForChart.fulfilled, (state, { payload }) => {
        state.statByYear = {
          expense: payload.statByYear.expense,
          income: payload.statByYear.income,
          month: payload.statByYear.month,
        };
        state.year = payload.year;
        state.month = payload.month;
        state.accumulatedProc = payload.accumulatedProc;
        state.accumulatedUah = payload.accumulatedUah;
        state.squareMeters = payload.squareMeters;
        state.accumToOneMoreMeters = payload.accumToOneMoreMeters;
      })
      .addCase(addOrChangeImageOfFlat.fulfilled, (state, { payload }) => {
        console.log(payload);
        return {
          ...state,
          imageUrl: payload,
        };
      })
      .addMatcher(
        action =>
          action.type.startsWith('dynamics') &&
          action.type.endsWith('/rejected'),
        (state, { payload }) => {
          return {
            ...state,
            error: payload,
          };
        }
      );
  },
});

export default dynamicsDataSlice.reducer;
