// import { refType } from '@mui/utils';
import { createSlice } from '@reduxjs/toolkit';
import {
  getCustomerSavingsForChart,
  addOrChangeImageOfFlat,
  getCustomerSavingsForStatistic,
} from '../operations/dynamicsOperations';
import { logout } from 'redux/operations/authOperations';

const dynamicsDataSlice = createSlice({
  name: 'dynamicsData',
  initialState: {
    statByYear: {
      expense: null,
      income: null,
      month: null,
    },
    savingStatistic: {
      income: null,
      expense: null,
      accumulated: null,
      plan: null,
      planInProcent: null,
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
          expense: payload.statByYear[0].expense,
          income: payload.statByYear[0].income,
          month: payload.statByYear[0].month,
        };
        state.year = payload.year;
        state.month = payload.month;
        state.accumulatedProc = payload.accumulatedProc;
        state.accumulatedUah = payload.accumulatedUah;
        state.squareМeters = payload.squareМeters;
        state.accumToOneMoreMeters = payload.accumToOneMoreMeters;
      })
      .addCase(addOrChangeImageOfFlat.fulfilled, (state, { payload }) => {
        return {
          ...state,
          imageUrl: payload,
        };
      })
      .addCase(
        getCustomerSavingsForStatistic.fulfilled,
        (state, { payload }) => {
          state.savingStatistic = {
            income: payload.income,
            expense: payload.expense,
            accumulated: payload.accumulated,
            plan: payload.plan,
            planInProcent: payload.planInProcent,
          };
        }
      )
      .addCase(logout.fulfilled, state => {
        state.imageUrl = null;
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
