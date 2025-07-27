import React,{useEffect,useState} from 'react' 
import {useParams,useLocation} from "react-router-dom";
import ShimmerUi from './ShimmerUi';
import RestaurantMenuCategory from './RestaurantMenuCategory';
import useRestaurantMenuCategory from '../utils/useRestaurantMenuCategory';
import RestaurantCard from './RestaurantCard';




function RestaurantMenu() {
    const { restaurantId } = useParams();
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
                    {filteredAndSearchedCategories.some(category => category.card?.card?.itemCards?.length > 0) ? (
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






