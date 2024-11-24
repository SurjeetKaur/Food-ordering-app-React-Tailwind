import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        },
        reducers:{
            addProduct:(state,action)=>{
                state.items.push(action.payload);
                },
            removeProduct:(state)=>{
                state.items.pop();
                },
            clearCart:(state)=>{
                state.items.length=0;
            }   
    }
})
export const{addProduct,removeProduct,clearCart}=cartSlice.actions;
export default cartSlice.reducer;