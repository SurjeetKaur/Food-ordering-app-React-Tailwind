import { useState } from 'react';
import React from 'react';
import ItemList from './RestaurantMenuItemslist';

function RestaurantMenuCategory({ data }) {
    const [shouldItemDisplay, setshouldItemDisplay] = useState(true);
    const handleClick = () => {
        setshouldItemDisplay(!shouldItemDisplay)
    }
    //console.log(data); 
    return (
        <div className='w-10/12 mx-auto my-10 shadow-md'>
                <div className='flex justify-between cursor-pointer' onClick={handleClick}> 
                    <span className='font-bold text-lg'>
                        {data.card?.card?.title} {(data.card?.card?.itemCards?.length>0)? `(${data.card?.card?.itemCards?.length})`: `(${0})`}
                    </span>
                    <span className='text-customOrange font-extrabold text-2xl'>{shouldItemDisplay ? "⇧" : "⇩"}</span>   
                </div> 
                <hr/>
            {/* accordian body */} 
            {shouldItemDisplay && <ItemList items={data.card.card.itemCards} />}   
        </div>
    )    
}
export default RestaurantMenuCategory