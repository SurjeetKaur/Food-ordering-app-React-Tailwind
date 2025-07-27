import { createSlice } from "@reduxjs/toolkit";

// Load saved cart from localStorage
const savedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
const savedRestaurantName = localStorage.getItem("restaurantName") || "";

const cartSlice=createSlice({
    name:"cart",
    initialState:{ 
        // items:[],
        // restaurantName:localStorage.getItem("restaurantName") || ""
        items: savedCart, 
        restaurantName: savedRestaurantName 
        },
        reducers:{
            // setRestaurantName: (state, action) => {
            //     if (action.payload) {  
            //         state.restaurantName = action.payload;
            //         localStorage.setItem("restaurantName", action.payload); // ✅ Store in localStorage
            //     } 
            // },
            setRestaurantName: (state, action) => {
                if (action.payload && state.restaurantName !== action.payload) {  
                    // Clear the cart when switching restaurants
                    state.items = [];
                    state.restaurantName = action.payload;
    
                    // Update localStorage
                    localStorage.setItem("restaurantName", action.payload);
                    localStorage.setItem("cartItems", JSON.stringify([])); // Clear cart in storage
                }
            },
            addProduct: (state, action) => {
                const { item, restaurantName } = action.payload;

                     //  Only clear cart if a different restaurant is selected
                    if (state.restaurantName && state.restaurantName !== restaurantName) {
                        state.items = []; // Clear cart when switching restaurants
                        state.restaurantName = restaurantName; //update restaurants
                        localStorage.setItem("restaurantName", restaurantName); // ✅ Update stored name
                        localStorage.setItem("cartItems", JSON.stringify([])); // Clear cart in storage
                    }
                   
                    // Check if the item already exists in the cart
                
                    const existingItem = state.items.find(cartItem => cartItem.item.card?.info?.id === item.card?.info?.id);
                    if (existingItem) {
                        // If the item already exists in the cart, increase the quantity
                        existingItem.quantity += 1;
                    } else {
                        // If it's a new item, add it with a quantity of 1
                        state.items.push({ item, quantity: 1 });
                        // state.items.push({ ...action.payload, quantity: 1 });
                    }
                    // Update localStorage
                    localStorage.setItem("cartItems", JSON.stringify(state.items));
                },        
            removeProduct:(state,action)=>{
                // state.items.pop();
                const { item } = action.payload;
                const existingItem = state.items.find(cartItem => cartItem.item?.card?.info?.id === item.card?.info?.id);
                if (existingItem) {
                    // If the quantity is greater than 1, just decrease the quantity
                    if (existingItem.quantity > 1) {
                        existingItem.quantity -= 1;
                    } else {
                        // If the quantity is 1, remove the item from the cart
                        state.items = state.items.filter(cartItem => cartItem.item?.card?.info?.id !== item.card?.info?.id);
                    }
                }
                // Update localStorage
                localStorage.setItem("cartItems", JSON.stringify(state.items));
                },
            clearCart:(state)=>{
                // state.items.length=0;
                state.items = [];
                state.restaurantName = "";
                localStorage.removeItem("cartItems");
                localStorage.removeItem("restaurantName"); // ✅ Clear stored name
             }
            
    }
})
export const{setRestaurantName,addProduct,removeProduct,clearCart,}=cartSlice.actions;
export default cartSlice.reducer;



