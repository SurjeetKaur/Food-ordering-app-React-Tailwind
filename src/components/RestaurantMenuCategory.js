import React from 'react'

function RestaurantMenuCategory({ data }) {
    console.log(data);
    return (
        <div className='w-6/12 m-auto bg-gray-50 shadow-lg'>
            <div className='flex justify-between cursor-pointer'>
                <span className='font-bold text-lg'>{data.card?.card?.title} ({data.card?.card?.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {/* accordian body */}
            
        </div>
    )
}

export default RestaurantMenuCategory