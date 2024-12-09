import React ,{useState} from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { RES_IMG_URL } from '../utils/Constants'
import nonVegIcon from '../images/non-veg.png';
import vegIcon from '../images/vegetarian.png';
import { addProduct, removeProduct } from '../utils/cartSlice'; //item to add in cart

function RestaurantMenuItemsList({ items }) {
    const dispatch=useDispatch();
    const cartItems=useSelector((state)=>state.cart.items);
    const[ message, setMessage]=useState('');

    const getItemQuantity = (itemId) => {
        const item = cartItems.find((cartItem) => cartItem.card.info.id === itemId);
        return item ? item.quantity : 0;
    };
    
      
    const handleCartItem=(item)=>{
        dispatch(addProduct(item));
        setMessage(`${item.card.info.name} has been added to the cart!`);
        setTimeout(()=>{
            setMessage('');
            },3000);
        };
    
    const handleRemoveItem=(item)=>{
        dispatch(removeProduct(item));
        setMessage(`${item.card.info.name} has been removed from the cart!`);
        setTimeout(()=>{
            setMessage('');
            },3000);

    }
    const handleAddItem=(item)=>{
        dispatch(addProduct(item));
    }
    return (
        <div>
             {message && <div className="alert fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 px-4 rounded bg-green-500 text-black mx-auto bg-opacity-8 z-10 h-8">{message}</div>} 
            {
                items?.map(item => (
                    <div className='p-2 m-2 flex border-gray-200 border-b-2 justify-between'>
                        <div className='px-4 mx-4 w-8/12'>
                            <div className='py-2'>
                                <span>{item.card.info.itemAttribute?.vegClassifier==="NONVEG"? (<img src={nonVegIcon} className='h-8 w-8' alt='non-veg'/>) :(<img src={vegIcon} className='w-8 h-8' alt='veg'/>)}</span>
                                <span className='text-orange-500 font-bold'> {item.card?.info?.isBestseller ? " ✦ BestSeller" : null}</span>
                                <h2 className='font-bold text-customGrey'>{item.card.info.name}</h2>
                                <h5 className='font-bold'> {item.card?.info?.price? `₹ ${item.card?.info?.price / 100}`: "No price Available"}</h5>
                            </div>
                            {item.card.info.ratings.aggregatedRating.rating && <p className={`font-bold ${item.card.info.ratings.aggregatedRating.rating < 3  ? 'text-yellow-500' : 'text-green-900' }`}> ☆ {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</p>}
                            <p className='text-customGrey line-clamp-2'>{item.card.info.description}</p>
                        </div>
                        <div className='W-32 h-32 rounded relative border-1 border-gray-600'>
                            <div className='absolute -bottom-0.5 left-1/2 transform -translate-x-1/2'>
                        
                            {getItemQuantity(item.card.info.id)===0 ?  (
                                <div className="flex justify-center items-center">
                                    <button className='p-2 bg-black text-white shadow-lg rounded-md m-auto hover:bg-gray-400 w-24' onClick={()=>{handleCartItem(item)}}>
                                    Add
                                   </button>
                                   
                                </div>
                            ) : (
                                <div className='flex justify-center items-center'>
                                <button
                                className=" bg-black text-white shadow-lg rounded-l hover:bg-gray-400 w-8 h-10"
                                onClick={() => handleRemoveItem(item)}
                            >
                                -
                            </button>
                            <div className='bg-black text-white shadow-lg w-8 text-center h-10 pt-2'>
                                 {getItemQuantity(item.card.info.id)} 
                            </div>
                            <button
                                className=" bg-black text-white shadow-lg rounded-r hover:bg-gray-400 w-8 h-10"
                                onClick={() => handleAddItem(item)}
                            >
                                +
                            </button>
                             </div>   
                            )}
                            </div>
                            {item.card.info.imageId? <img src={RES_IMG_URL + item.card.info.imageId} className="w-32 h-32 rounded-lg "  alt="item-image"/> : <i className="fa fa-image text-9xl text-slate-400"></i>}
                        </div> 
                    </div>
                ))
                
            }
        </div>
    )
}

export default RestaurantMenuItemsList