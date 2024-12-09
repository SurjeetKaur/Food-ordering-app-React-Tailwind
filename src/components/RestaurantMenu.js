import React,{useEffect,useState} from 'react' 
import {useParams} from "react-router-dom";
import ShimmerUi from './ShimmerUi';
import RestaurantMenuCategory from './RestaurantMenuCategory';
import useRestaurantMenuCategory from '../utils/useRestaurantMenuCategory';
import RestaurantCard from './RestaurantCard';



function RestaurantMenu() {
    const { restaurantId } = useParams()
    //console.log("resId", restaurantId)
    const categories = useRestaurantMenuCategory(restaurantId)
    //console.log("categories from Restaurant Menu", categories)
    const [filter, setFilter] = useState('ALL');
    const[searchText,setSearchText]=useState('');
       
       
    if (categories.length == 0) {
        return <ShimmerUi />
    }

    // Apply category filter and search filter in one step
    let filteredAndSearchedCategories = categories.map((category) => {
        // Check if itemCards exists to avoid undefined errors
        const items = category.card?.card?.itemCards || [];

        // Filter by category
        const filteredItems = items.filter((item) => {
            if (filter === 'ALL') return true;
            if (filter === 'VEG') return item.card.info.itemAttribute.vegClassifier === 'VEG';
            if (filter === 'NONVEG') return item.card.info.itemAttribute.vegClassifier === 'NONVEG';
            if (filter === 'BESTSELLER') return item.card.info.isBestseller;
            return false;
        });

        // Search filter
        const searchedItems = filteredItems.filter((item) =>
            item.card.info.name.toLowerCase().includes(searchText.toLowerCase())
        );

        return {
            ...category,
            card: { ...category.card, card: { ...category.card.card, itemCards: searchedItems } }
        };
    });
//console.log("filteredAndSearchedCategories", filteredAndSearchedCategories)
   

     
    const handleFilter = (type) => {
        setFilter(type);
    };
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    };
    //const restaurantName=

    return (
        <div className='menu-categories w-10/12 m-auto'>
            <h2 className='text-customGrey text-center text-4xl p-6'>Menu 🍽️</h2>
            <div className='flex flex-wrap justify-center'>
                <input type="text" className='border border-gray-300  p-2 focus:outline-none  w-[400px] h-[50px]' placeholder="Search for dishes"
                value={searchText}
                onChange={handleSearch}
                />
                <button className="search-btn h-[50px] w-[50px] pl-4 bg-customOrange hover:bg-gray-300"><i className=" fa fa-search  text-xl mr-4"></i>
                </button>
            </div>
             {/* filter buttons */}

            <div className='flex flex-wrap justify-center flex-row mb-4 my-4'>
                <button className= ' bg-slate-200  hover:bg-customOrange w-[100px] h-[40px] m-4 rounded-full shadow-md shadow-slate-800 text-customGrey font-semibold  hover:text-white' 
                  onClick={() => handleFilter('VEG')}
                >
                    Vegetarian
                </button>
                <button className=' bg-slate-200  hover:bg-customOrange w-[100px] h-[40px] m-4 rounded-full shadow-md shadow-slate-800 text-customGrey font-semibold  hover:text-white'
                onClick={() => handleFilter('NONVEG')}>
                    Non-Veg
                </button>
                <button className=' bg-slate-200  hover:bg-customOrange w-[100px] h-[40px] m-4 rounded-full shadow-md shadow-slate-800 text-customGrey font-semibold  hover:text-white'
                onClick={() => handleFilter('BESTSELLER')}>
                    BestSeller
                </button>   
            </div>
            <br/>
            <hr/>
            {/* <div>
                <h2 className='justify-start pl-2 font-bold text-2xl'>Top Picks</h2>
            </div> */}
            <hr/>
            <div>
                <h3>
                    <ul>
                    {filteredAndSearchedCategories.some(category => category.card.card.itemCards.length > 0) ? (
                filteredAndSearchedCategories.map((category, index) => (
                    <RestaurantMenuCategory key={index} data={category} />  
                ))
            ) : (
                <p className="flex justify-center text-center text-xl text-red-500 py-8 mx-auto">No item(s) found! </p>
            )}  
                    </ul>
                </h3>
            </div>  
        </div>
    )
}

export default RestaurantMenu







// let filteredList = originalRestaurantsData.filter((restaurant) => {
//     return restaurant.info.avgRatingString >= 4.5 //filter for top rated restuarants
// })
// //console.log("filteredList", filteredList)
// setRestaurants(filteredList) // Update the restaurants state with filtered results
// //console.log("after filter restaurants", restaurants)
// }} >



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

