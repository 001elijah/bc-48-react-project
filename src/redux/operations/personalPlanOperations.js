import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    prePostPlanAPI,
    postPlanAPI,
    getPlanAPI,
    putPlanAPI,
} from "../../services/backendAPI";
import { Notify } from "notiflix";

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
        console.log('posting the plan');
        try {
            const plan = await postPlanAPI(planData);
            console.log('posted the plan');
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
            const isPersonalPlanExists = Object.values(plan).every(value =>
                +value.salary !== 0 &&
                +value.passiveIncome !== 0 &&
                +value.savings !== 0 &&
                +value.cost !== 0 &&
                +value.footage !== 0 &&
                +value.procent !== 0);
            return { ...plan, isPersonalPlanExists };
        } catch (error) {
            if (error?.response?.status === 400) Notify.info('Create your first personal plan!');
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