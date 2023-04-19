import { createSlice } from "@reduxjs/toolkit";

const dynamicsDataSlice = createSlice({
    name: 'dynamicsData',
    initialState: {
        statByYear: {
            expense: null,
            income: null,
            month: null
            },
        year: null,
        month: null,
        accumulatedProc: null,
        accumulatedUah: null,
        squareМeters: null,
        accumToOneMoreMeters: null,
    },
});

export default dynamicsDataSlice.reducer;