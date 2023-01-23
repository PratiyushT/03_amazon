import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [] };

export const basketSlice = createSlice({
    name: "basket",
    initialState,

    //ACTIONS (REDUCERS)
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        clearBasket: (state,action) => {
            state.items = [];
        },
        removeFromBasket: (state, action) => {},
    },
});

// SELECTORS
export const selectItems = state => state.basket.items;

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
