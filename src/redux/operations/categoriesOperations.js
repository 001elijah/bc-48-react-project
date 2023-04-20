import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getListOfCategoryApi,
} from "../../services/backendAPI";

const axiosHeaderToken = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
}

export const getListOfCategory = createAsyncThunk('categories/getListOfCategory',
    async (_, { getState, rejectWithValue }) => {
        const { token } = getState().authorized;
        axiosHeaderToken.set(token);
        try {
            const categoriesList = await getListOfCategoryApi();
            return categoriesList;
        } catch (error) {
            rejectWithValue(error.message);
        }
    }
)