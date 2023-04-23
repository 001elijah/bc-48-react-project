import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    prePostPlanAPI,
    postPlanAPI,
    getPlanAPI,
    putPlanAPI,
} from "../../services/backendAPI";

const axiosHeaderToken = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const prePostPlan = createAsyncThunk('personalPlan/prePost',
    async (planData, { getState, rejectWithValue }) => {
        const { token } = getState().authorized;
        axiosHeaderToken.set(token);
        try {
            const plan = await prePostPlanAPI(planData);
            return plan;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)

export const postPlan = createAsyncThunk('personalPlan/post',
    async (planData, { getState, rejectWithValue }) => {
        const { token } = getState().authorized;
        axiosHeaderToken.set(token);
        const plan = getState().personalPlan;
        if (plan) throw new Error();
        try {
            const plan = await postPlanAPI(planData);
            return plan;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)

export const getPlan = createAsyncThunk('personalPlan/get',
    async (_, { getState, rejectWithValue }) => {
        const { token } = getState().authorized;
        axiosHeaderToken.set(token);
        try {
            const plan = await getPlanAPI();
            const isPersonalPlanExists = Object.values(plan).every(value => +value !== 0);
            return { plan, isPersonalPlanExists };
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)

export const putPlan = createAsyncThunk('personalPlan/put',
    async (planData, { getState, rejectWithValue }) => {
        const { token } = getState().authorized;
        axiosHeaderToken.set(token);
        try {
            const plan = await putPlanAPI(planData);
            return plan;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)