import React from 'react'
import RestaurantMenuItemsList from './RestaurantMenuItemslist';
import { useSelector } from 'react-redux';
import { EMPTY_CART_IMG } from '../utils/Constants';

function Cart() {
    const cartItems = useSelector((store) => store.cart.items);
    //console.log("cartItems",cartItems);

    
  return (
    <div>
        {/* <h1 className='justify-center flex text-bold text-4xl p-4'>Cart</h1> */}
        <div className='flex  flex-col justify-center w-8/12 m-auto'> {cartItems.length>0 ? <RestaurantMenuItemsList items={cartItems} /> : 
            <div className='items-center flex flex-col justify-center'>
                <div className='my-10'>
                <img src={EMPTY_CART_IMG} className="w-52 h-52"  alt="empty cart image"/>
                </div> 
                <h2 className='text-customOrange text-2xl py-4'>Your cart is empty</h2>
                <p className='py-4'>You can go to home page to view more restaurants</p>
            </div>
            }
        </div>
        
    </div>
  )
}

export default Cart

