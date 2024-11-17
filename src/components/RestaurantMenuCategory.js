import React from 'react';

function RestaurantMenuCategory({ data }) {
    //console.log(data); 
    return (
        <div className='w-4/6 m-auto bg-gray-50 shadow-md'>
                <div className='flex justify-between cursor-pointer my-4'> 
                <span 
                    className={`font-bold text-lg ${data.card?.card?.title === "Recommended" ? 'text-red-600 bg-slate-500' : 'text-black'}`}
                >
                    {data.card?.card?.title} ({data.card?.card?.itemCards?.length})
                </span>
                    <span>⬇️</span>
                </div> 
            {/* accordian body */}    
        </div>
    )    
}
export default RestaurantMenuCategory