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
        clearBasket: state => {
            state.items = [];
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(
                item => item.id == action.payload
            );
            state.items.splice(index, 1);
        },
    },
});

// SELECTORS
export const selectItems = state => state.basket.items;
export const selectTotalPrice = state =>
    state.basket.items.reduce((total, item) => total + item.price, 0);

export const { addToBasket, removeFromBasket, clearBasket } =
    basketSlice.actions;
export default basketSlice.reducer;
