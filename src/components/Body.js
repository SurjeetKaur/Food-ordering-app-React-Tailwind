import React,{useEffect,useState} from 'react' 
import {Link} from "react-router-dom"; // useEffect and useState are (hooks)functions 
import RestaurantCard from './RestaurantCard'
import { DATA_RESTAURANTS ,GRID_DATA, RES_API_URL} from '../utils/Constants'
import ResSpecialItemsCards from './ResSpecialItemsCards'
import ShimmerUi from './ShimmerUi'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import withPromotionLabel from './withPromotionLabel';
import useRestaurantCards from '../utils/useRestaurantCards';




function Body() {
  {/* useEffect hook is used to trigger a data fetching operation when the component first loads, 
  ensuring that the data is retrieved only once during the component's lifecycle.*/}
  
  useEffect(() => {
      //console.log("component is re rendered");
      fetchData();
  }, []);
  
  // let filteredList = DATA_RESTAURANTS; // this is normal js variable, instead using useState in React app

{/* ------------------ all useState------------------------------------------ */}

  let[restaurants, setRestaurants] = useState([]); //restaurants is a state : initially restaurants would be empty
  let[originalRestaurantsData,setOriginalResturantsData]=useState([]); //use to remain the same, unchanged, and always hold the original list of restaurants fetched from the API
  let searchText;
  let[specialItemsData, setSpecialItemsData] = useState([]);
  let[shimmerEffect,setShimmerEffect]=useState(false);
  let[noResultsFound,setNoResultsFound]=useState(false);
  
{/*---------async function named fetchData to call  and fetch data from swiggy API-------------------- */}  

    const fetchData = async () => {
        setShimmerEffect(true); // Show shimmer effect while data is being fetched
        const data = await fetch(RES_API_URL);   
        let json = await data.json()
        //console.log( ' restaurants data of api',data);

        const resGridData= json?.data?.cards[0]?.card?.card?.imageGridCards?.info 
        setSpecialItemsData(resGridData);
        setShimmerEffect(false); //hide shimmer effect

        const resData= await useRestaurantCards();
        setRestaurants(resData);
        console.log( "resData",resData);
        setOriginalResturantsData(resData); //original restaurant's data
        setShimmerEffect(false);// Hide shimmer effect after fetching
    }
   

   // HOC => accepts RestaurantCard as input and returns enhanced RestaurantCard
   const EnhancedRestaurantCard = withPromotionLabel(RestaurantCard)

    return (shimmerEffect? <ShimmerUi/>: 
      <div className='body'>
        { /* ------------------grid special items------------------------ */ }

        <div className="images-grid-container flex flex-col border-b border-gray-300">
          <div className="grid-header">
             <h2 className='text-2xl p-4 font-bold'>What's on your mind?</h2> 
          </div>
          <div className="res-special-items my-10"> 
            {specialItemsData && (
            <Slider
              className='grid-slider'
              infinite={true}
              speed={2000}
              slidesToShow={5}
              slidesToScroll={4} 
              style={{ width: '100%'}}
              arrows={true} 
              autoplay={true}
              autoplaySpeed={5000}
              >           
              {
                specialItemsData.map((specialItem, index) => (
                  <ResSpecialItemsCards
                        key={index}
                        imageId={specialItem.imageId}
                        description={specialItem.action.text}      
                    />
                ))
              }
            </Slider>
            )}
          </div>      
        </div>
        {/* top rated chains */ }
        <div className='top-rated-res-container flex flex-col border-b border-gray-300'>
          <h2 className='text-2xl font-bold p-4'>Top restaurant chains</h2>
          <div className="filter-top-res-cards flex flex-row flex-wrap justify-between my-10">
              {
                 <Slider
                 className='grid-slider'
                 infinite={true}
                 speed={2000}
                 slidesToShow={4}
                 slidesToScroll={5} 
                 style={{ width: '100%'}}
                 arrows={true} 
                 autoplay={true}
                 autoplaySpeed={5000}
                 > 
                 {
                  originalRestaurantsData.filter(restaurant => restaurant.info.avgRatingString >= 4.0)
                  .map((restaurant, index) => (
                      <EnhancedRestaurantCard
                      key={index}
                      promoted={restaurant.info.promotion}
                      cloudinaryId={restaurant.info.cloudinaryImageId} 
                      name={restaurant.info.name}
                      deliveryTime={restaurant.info.sla.slaString}
                      ratings={`${restaurant.info.avgRatingString}`}
                      cuisines={restaurant.info.cuisines?.join(", ")} // join() is used to combine elements into a string. When working with objects, extract the property values to make them strings.
                      areaName={restaurant.info.areaName}
                      discountHeader={restaurant.info.aggregatedDiscountInfoV3?.header} 
                      discountSubHeader={restaurant.info.aggregatedDiscountInfoV3?.subHeader}
                      discountTag={restaurant.info.aggregatedDiscountInfoV3?.discountTag}
                    />
                  ))
                }
                </Slider>
              }   
          </div>
        </div>
            
         {/* section contains restaurants with online food delievery */}

        <div className='online-food-restaurants flex flex-col'> 
          <h2 className='text-2xl font-bold p-4'>Restaurants with online food delievery</h2>  
          {/*----------div named Search-bar contain code to search desired food and restaurants from list or data -------------- */} 

          <div className="search-bar flex justify-center">
            <input type="text"className='border border-gray-300  p-2 focus:outline-none  w-[400px] h-[50px]' placeholder="Search for food or restaurants" id="search-text"
            onChange={(e) => {
              searchText=e.target.value.toLowerCase();
            }}
            />
            <button className="search-btn h-[50px] w-[50px] pl-4 bg-customOrange hover:bg-gray-300" onClick={() => {
              if(!searchText){
                //alert('Please enter something to search');
                 // If the search text is empty, reset to original data
                setRestaurants(originalRestaurantsData);
                setNoResultsFound(false);
              }else{
              const filteredList=originalRestaurantsData.filter((restaurant)=>{
                return restaurant.info.name.toLowerCase().includes(searchText)
              })
              
              if (filteredList.length === 0) {
                setRestaurants([]); // clear the restaurants array
                setNoResultsFound(true);
                //alert('No restaurant or food found matching your search criteria');
              } else {
                setRestaurants(filteredList); // Update the restaurants state with filtered results
                setNoResultsFound(false);
              }
              }}}
              ><i className=" fa fa-search  text-xl mr-4"></i>
            </button>
          </div>
  
         
       {/*----------- div named filter-top-restaurants to show restaurants list having rating above or equal to 4.5 -------------------*/}

          <div className='filter-top-restaurants flex'>
              <button  className='bg-customOrange w-[100px] h-[50px] m-4 rounded  hover:bg-gray-300' onClick={() => {
                  let filteredList = originalRestaurantsData.filter((restaurant) => {
                      return restaurant.info.avgRatingString >= 4.5 //filter for top rated restuarants
                  })
                  //console.log("filteredList", filteredList)
                  setRestaurants(filteredList) // Update the restaurants state with filtered results
                  //console.log("after filter restaurants", restaurants)
                }} >
                 Ratings 4.4+
              </button>
          </div>

           {/* -----------------div container which has all cards of restaurants with data -------------------------------*/}
          
            <div id="res-id" className='res-container flex flex-row justify-evenly w-full flex-wrap mb-4'>
              {
                noResultsFound ? ( <div id='alert-message' className='text-red-600 py-4'>No restaurants or food found matching your search criteria !</div>):(
                restaurants && restaurants.map((restaurant, index) => {
                  return (
                  <Link to={"/restaurantmenu/" + restaurant.info.id}>
                     <EnhancedRestaurantCard
                        key={index}
                        promoted={restaurant.info.promotion}
                        cloudinaryId={restaurant.info.cloudinaryImageId} 
                        name={restaurant.info.name}
                        deliveryTime={restaurant.info.sla.slaString}
                        ratings={`${restaurant.info.avgRatingString}`}
                        cuisines={restaurant.info.cuisines?.join(", ")} // join() is used to combine elements into a string. When working with objects, extract the property values to make them strings.
                        areaName={restaurant.info.areaName}
                        discountHeader={restaurant.info.aggregatedDiscountInfoV3?.header} 
                        discountSubHeader={restaurant.info.aggregatedDiscountInfoV3?.subHeader}
                        discountTag={restaurant.info.aggregatedDiscountInfoV3?.discountTag}
                      />
                  </Link>  ) 
                  })
                )} 
            </div>
          </div>
        </div>
    
      )}

export default Body





