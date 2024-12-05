import React from'react';
import { DATA_RESTAURANTS, RES_API_URL } from './Constants';

async function useRestaurantCards() {
    const data = await fetch(RES_API_URL);
    let json = await data?.json()
    //json = null;
    let resData = json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
        : json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
            : json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[3].card?.card?.gridElements?.infoWithStyle?.restaurants
                : json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants ? json?.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
                    : DATA_RESTAURANTS;
    //console.log("resdata from hook", resData)
    //resData = [];
    return resData;

}


export default useRestaurantCards