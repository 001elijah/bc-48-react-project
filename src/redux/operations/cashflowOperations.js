import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  getDailyLimitAPI,
  postTransactionApi,
  getListOfCategoryApi,
  getLimitsAndTotalsApi,
  // postTransactionApi,
  getListOfTransactionsApi,
  deleteOneTransactionApi,
  putOneTransactionApi,
  getCashflowStatApi,
} from '../../services/backendAPI';
import { getCurrentUserInfo } from './authOperations';

const axiosHeaderToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getDailyLimit = createAsyncThunk(
  'cashflow/getDailyLimit',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      const dailyLimit = await getDailyLimitAPI();
      return dailyLimit;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getListOfCategory = createAsyncThunk(
  'cashflow/getListOfCategory',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      const listOfCategory = await getListOfCategoryApi();
      return listOfCategory;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getLimitsAndTotals = createAsyncThunk(
  'cashflow/getLimitsAndTotals',
  async (_, { getState, rejectWithValue }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      const limitsAndTotals = await getLimitsAndTotalsApi();
      return limitsAndTotals;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const postTransaction = createAsyncThunk(
  'cashflow/postTransaction',
  async (transactionData, { getState, rejectWithValue, dispatch }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      const transaction = await postTransactionApi(transactionData);
      setTimeout(() => {
        dispatch(getCurrentUserInfo());
      }, 0);
      return transaction;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getListOfTransactions = createAsyncThunk(
  'cashflow/getListOfTransactions',
  async (periodData, { getState, rejectWithValue }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      const transactionsList = await getListOfTransactionsApi(periodData);
      return transactionsList;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const deleteOneTransaction = createAsyncThunk(
  'cashflow/deleteOneTransaction',
  async (transactionId, { getState, rejectWithValue }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      await deleteOneTransactionApi(transactionId);
      // return transactionId;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const putOneTransaction = createAsyncThunk(
  'cashflow/putOneTransaction',
  async (transactionIdAndData, { getState, rejectWithValue }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      const transaction = await putOneTransactionApi(transactionIdAndData);
      return transaction;
    } catch (error) {
      throw Error(error.message);
    }
  }
);

export const getCashflowStat = createAsyncThunk(
  'cashflow/getCashflowStat',
  async (periodData, { getState, rejectWithValue }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      const statistics = await getCashflowStatApi(periodData);
      return statistics;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
