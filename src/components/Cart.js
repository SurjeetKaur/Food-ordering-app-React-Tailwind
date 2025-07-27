import React from 'react'
import RestaurantMenuItemsList from './RestaurantMenuItemslist';
import { useSelector } from 'react-redux';
import { EMPTY_CART_IMG } from '../utils/Constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setRestaurantName ,addProduct} from '../utils/cartSlice';



function Cart() {
  
  const cartItems = useSelector((store) => store.cart.items ||[]); 
  const restaurantName = useSelector((store) => store.cart?.restaurantName );
  
  console.log("Restaurant in Cart.js:", restaurantName);
  console.log("Cart items:", cartItems);

    // Calculate the total item cost
    const totalItemCost = cartItems.reduce((total, cartItem) => {
      const price = cartItem.item.card?.info?.price;
      // return total + (price / 100) * item.quantity;
      return price ? total + (price / 100) * cartItem.quantity : total;
  }, 0);
    

    // Define a service fee
    const serviceFee = 0.13 * totalItemCost;

    // Calculate the total amount to pay
    const totalToPay = totalItemCost + serviceFee;

    
  return (
    <div>
       <div className='flex flex-col justify-center w-11/12 md:w-9/12 mx-auto mb-64 text-customGrey'> 
            {cartItems?.length>0 ? (
            <>
             <h1 className='font-bold text-black flex justify-center text-xl py-4'>Secure Checkout</h1>
             <div className='flex md:flex-row flex-col justify-center'>
              <div className='flex flex-col justify-center m-auto md:w-3/6'>
                  {restaurantName && (
                      <div className='flex flex-col items-center mb-4'>
                          <h2 className='text-2xl font-bold mt-2'>{restaurantName}</h2>
                      </div>
                  )}
                  <RestaurantMenuItemsList items={cartItems.map(cartItem => cartItem.item)} />
              </div>
              <div className='flex flex-col md:w-3/6 mx-auto md:border-l-2 md:border-t-0 border-gray-200 p-2 md:my-0 '>
                <h2 className='flex justify-start font-bold py-0'>Bill Details</h2><hr/>
                <div className='flex justify-between'>
                  <p>Item Total</p>
                  <p>₹ {totalItemCost.toFixed(2)}</p>
                </div>
                <div className='flex justify-between'>
                  <p>Service Fee(GST)</p>
                  <p>₹ {serviceFee.toFixed(2)}</p>
                </div><hr/>
                <div className='flex justify-between'>
                  <p className='font-bold'>To Pay</p>
                  <p className='font-bold'>₹ {totalToPay.toFixed(2)}</p>
                </div>
              </div>
            </div>
         </>
          ) :(
              <div className='items-center flex flex-col justify-center m-auto'>
                  <div className='my-10'>
                  <img src={EMPTY_CART_IMG} className="w-52 h-52"  alt="empty cart image"/>
                  </div> 
                  <h2 className='text-customOrange text-2xl py-4'>Your cart is empty</h2>
                  <p className='py-4'>You can go to home page to view more restaurants</p>
              </div>
              )}
          </div>
    </div>
  )
}

export default Cart

