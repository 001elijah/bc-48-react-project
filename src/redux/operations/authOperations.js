import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  registerUserApi,
  loginUserApi,
  getUserDataApi,
  currentUserLogoutApi,
  addBalanceApi,
} from '../../services/backendAPI';
import { getPlan } from './personalPlanOperations';

const axiosHeaderToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUserData, { rejectWithValue }) => {
    try {
      const userData = await registerUserApi(newUserData);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue, dispatch }) => {
    try {
      const token = await loginUserApi(userData);
      setTimeout(() => {
        dispatch(getCurrentUserInfo());
      }, 0);
      axiosHeaderToken.set(token);
      return token;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserInfo = createAsyncThunk(
  'auth/getCurrentUserInfo',
  async (_, { getState, rejectWithValue, dispatch }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      const userInfo = await getUserDataApi();
      setTimeout(() => {
        dispatch(getPlan());
      }, 0);
      return userInfo;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { token } = getState().authorized;
      return Boolean(token);
    },
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      await currentUserLogoutApi();
      axiosHeaderToken.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBalance = createAsyncThunk(
  'auth/addBalance',
  async (userBalance, { rejectWithValue, getState }) => {
    const { token } = getState().authorized;
    axiosHeaderToken.set(token);
    try {
      await addBalanceApi(userBalance);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
  // {
  //     condition: (_, {getState}) => {
  //         const { balance } = getState().authorized.user;
  //         if (balance) return false;
  //         return true;
  //     }
  // }
);
