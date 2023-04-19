import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        products: "Products",
        clothingAndFootwear: "Clothing and Footwear",
        cafesAndRestaurants: "Cafes and restaurants",
        beautyAndMedicine: "Beauty and medicine",
        health: "Health",
        transport: "Transport",
        house: "House",
        other: "Other"
    },
});

export default categoriesSlice.reducer;