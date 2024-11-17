import React,{useEffect,useState} from 'react' 
import {useParams} from "react-router-dom";
import { MOCK_RES_MENU, RES_MENU_API, MENU_IMAGE } from '../utils/Constants';
import ShimmerUi from './ShimmerUi';
import RestaurantMenuCategory from './RestaurantMenuCategory';
import useRestaurantMenuCategory from '../utils/useRestaurantMenuCategory';


function RestaurantMenu() {
    const { restaurantId } = useParams()
    //console.log("resId", restaurantId)
    const categories = useRestaurantMenuCategory(restaurantId)
    console.log("categories from Restaurant Menu", categories)
    if (categories.length == 0) {
        return <ShimmerUi />
    }
    return (
        <div className='menu-categories'>
            <h3>
                <ul>
                    {categories.map((category) => (
                        <RestaurantMenuCategory data={category} />
                    ))}
                </ul>
            </h3>
        </div>
    )
}

export default RestaurantMenu



// function RestaurantMenu() {
//     const { restaurantId } = useParams()  //params hook
//     const [resMenu, setResMenu] = useState([]);
//     useEffect(()=>{
//         // fetch data from API
//        fetchResMenu();
//     },[]);
      
//     const fetchResMenu = async () => {
//             const menuAPI = await fetch(RES_MENU_API + restaurantId);
//             console.log(RES_MENU_API + restaurantId);
//             const menuJsonData = await menuAPI.json();
            
//             //console.log('MENU JSON DATA', menuJsonData);
//             const menuCards = menuJsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        
//             console.log("menu list:",menuCards);

//            // if menu cards do not have data then render data from mock-res-menu
//             if (menuCards) {
//                 setResMenu(menuCards)
             
//             }
//             else {
//                 setResMenu(MOCK_RES_MENU)
//                 //console.log("MOCK MENU" ,MOCK_RES_MENU)
//             }
//         }
// // incase there is no data in resMenu then show shimmer UI
//         if (resMenu.length == 0) {
//             return <ShimmerUi />
//         }
//         return (
//             <div>
//                 <div className='res-menu-container'>
//                 <h2>Restaurant Menu</h2>
//                     <div className='menu-list'>
//                     <ul>
//                             {resMenu.map((menu) => (
//                                 menu.card.card.title && <li key={menu.card.card.title}>
//                                     <h3 style ={{color: "black"}}>{menu.card?.card?.title} {menu.card?.card?.itemCards?.length}</h3>
//                                     {menu.card.card.itemCards && menu.card.card.itemCards.map((item) => {
//                                         return (
//                                             <>
//                                             <div className='item-list'>
//                                                 <div className='menu-description'>
//                                                 <h3>{item.card.info.name}</h3>
//                                                 <h3> ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</h3> 
//                                                 <h4>
//                                                     {item.card.info.ratings.aggregatedRating.rating && item.card.info.ratings.aggregatedRating.ratingCountV2 ? (
//                                                     <h4> ⭐ {item.card.info.ratings.aggregatedRating.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</h4>
//                                                     ) : ( <h4></h4>)}
//                                                 </h4>
//                                                 <h4>{ item.card.info.isGuiltfree? (<h4>guiltfree</h4> ): null}</h4>
//                                                 <p>{item.card.info.description}</p>
//                                             </div>
//                                                 <div className='menu-image'>
//                                                    <img className='res-img' src={`${MENU_IMAGE}${item.card.info.imageId}`} alt="menu" />
//                                                 </div>
//                                             </div>
//                                             </>
//                                         )
                                        
//                                     })}
//                                 </li>
//                             ))}
//                         </ul>                   
//                     </div>
//                 </div>              
//             </div>
//         )
//         }

// export default RestaurantMenu



{/* previous code
 
<ul>
    {resMenu.map((menu) => (
        <li key={menu.card.info.id}>
            {menu?.card?.info?.name}
        </li>
    ))}
</ul> 
                */}

