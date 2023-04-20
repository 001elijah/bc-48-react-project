import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getCustomerSavingsForChartApi,
    getCustomerSavingsForStatisticApi,
    addOrChangeImageOfFlatApi,
} from "../../services/backendAPI";

const axiosHeaderToken = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const getCustomerSavingsForChart = createAsyncThunk('cashflow/getCustomerSavingsForChart',
    async (_, { getState, rejectWithValue }) => {
        const { token } = getState().authorized;
        axiosHeaderToken.set(token);
        try {
            const savingsDataForChart = await getCustomerSavingsForChartApi();
            return savingsDataForChart;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)

export const getCustomerSavingsForStatistic = createAsyncThunk('cashflow/getCustomerSavingsForStatistic',
    async (periodData, { getState, rejectWithValue }) => {
        const { token } = getState().authorized;
        axiosHeaderToken.set(token);
        try {
            const savingsDataForStats = await getCustomerSavingsForStatisticApi(periodData);
            return savingsDataForStats;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)

export const addOrChangeImageOfFlat = createAsyncThunk('cashflow/addOrChangeImageOfFlat',
    async (imageFile, { getState, rejectWithValue }) => {
        const { token } = getState().authorized;
        axiosHeaderToken.set(token);
        try {
            const imageUrl = await addOrChangeImageOfFlatApi(imageFile);
            return imageUrl;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)