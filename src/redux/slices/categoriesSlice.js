import { createSlice } from '@reduxjs/toolkit';
import { getListOfCategory } from 'redux/operations/categoriesOperations';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  extraReducers: builder => {
    builder.addCase(getListOfCategory.fulfilled, (state, { payload }) => {
      state.categories = payload;
    });
  },
});

export default categoriesSlice.reducer;
