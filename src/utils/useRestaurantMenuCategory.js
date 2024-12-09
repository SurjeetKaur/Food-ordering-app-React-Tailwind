import { useEffect, useState } from "react";
import { MOCK_RES_MENU, RES_MENU_API } from "./Constants";

const useRestaurantMenuCategory = (restaurantId) => {
    const [resMenu, setResMenu] = useState([])
    useEffect(() => {
        fetchResMenu();
    }, []);
    const fetchResMenu = async () => {
        const menuResAPI = await fetch(RES_MENU_API + restaurantId);
        const jsonMenu = await menuResAPI?.json();
        //console.log("jsonMenu", jsonMenu);
    if (jsonMenu){
        const cards = jsonMenu.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards

        // get the categories
        // 1. ItemCategory
        const category = cards.filter((menuItem) => menuItem.card.card?.["@type"].includes("ItemCategory"))
        console.log("category", category)
        setResMenu(category)
    }
    else{
        setResMenu(MOCK_RES_MENU)
    }
}
    return resMenu;
}

export default useRestaurantMenuCategory