import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        },
        reducers:{
            addProduct:(state,action)=>{
                const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
                if (existingItem) {
                    // If the item already exists in the cart, increase the quantity
                    existingItem.quantity += 1;
                } else {
                    // If it's a new item, add it with a quantity of 1
                    state.items.push({ ...action.payload, quantity: 1 });
                }
               // state.items.push(action.payload);
                },
            removeProduct:(state,action)=>{
                // state.items.pop();
                const existingItem = state.items.find(item => item.card.info.id === action.payload.card.info.id);
                if (existingItem) {
                    // If the quantity is greater than 1, just decrease the quantity
                    if (existingItem.quantity > 1) {
                        existingItem.quantity -= 1;
                    } else {
                        // If the quantity is 1, remove the item from the cart
                        state.items = state.items.filter(item => item.card.info.id !== action.payload.card.info.id);
                    }
                }
                },
            clearCart:(state)=>{
                state.items.length=0;
            }   
    }
})
export const{addProduct,removeProduct,clearCart}=cartSlice.actions;
export default cartSlice.reducer;