import React from 'react';
import { useDispatch } from 'react-redux';
import { RES_IMG_URL } from '../utils/Constants'
import nonVegIcon from '../images/non-veg.png';
import vegIcon from '../images/vegetarian.png';
import { addProduct } from '../utils/cartSlice'; //item to add in cart

function ItemList({ items }) {
    const dispatch=useDispatch();
    const handleAddCartItem=()=>{
        dispatch(addProduct("item added"))
    }
    return (
        <div>
            {
                items?.map(item => (
                    <div className='p-2 m-2 flex border-gray-200 border-b-2 justify-between'>
                        <div className='px-4 mx-4 w-6/12'>
                            <div className='py-2'>
                                <span>{item.card.info.itemAttribute?.vegClassifier==="NONVEG"? (<img src={nonVegIcon} className='h-8 w-8' alt='non-veg'/>) :(<img src={vegIcon} className='w-8 h-8' alt='veg'/>)}</span>
                                <span className='text-orange-500 font-bold'> {item.card?.info?.isBestseller ? " ✦ BestSeller" : null}</span>
                                <h2 className='font-bold text-customGrey'>{item.card.info.name}</h2>
                                <h5 className='font-bold'> {item.card?.info?.price? `₹ ${item.card?.info?.price / 100}`: "No price Available"}</h5>
                            </div>
                            {item.card.info.ratings.aggregatedRating.rating && <p className={`font-bold ${item.card.info.ratings.aggregatedRating.rating < 3  ? 'text-yellow-500' : 'text-green-900' }`}> ☆ {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</p>}
                        </div>
                        <div className='W-32 h-32 rounded relative border-1 border-gray-600'>
                            <div className='absolute -bottom-0.5 left-1/2 transform -translate-x-1/2'>
                                <button className='p-2 bg-black text-white shadow-lg rounded-lg m-auto hover:bg-gray-400' onClick={handleAddCartItem}>Add +</button>
                            </div>
                            <img src={RES_IMG_URL + item.card.info.imageId} className="w-32 h-32 rounded-lg "  alt="item-image"/>
                        </div>
                    </div>
                ))
                
            }
        </div>
    )
}

export default ItemList