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
        const json = await data.json()
        console.log( 'data of api',data)

        const resGridData= json?.data?.cards[0]?.card?.card?.imageGridCards?.info 
        //  const resGridData= json.data.cards[0];
        setSpecialItemsData(resGridData);
      
        setShimmerEffect(false); //hide shimmer effect

         const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants? json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants:
         json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants? json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants:
         DATA_RESTAURANTS;
        setRestaurants(resData);
        console.log( "resData",resData);
        setOriginalResturantsData(resData); //original restaurant's data
        setShimmerEffect(false);// Hide shimmer effect after fetching
    }
   //  return (restaurants.length==0? <ShimmerUi />:

   // HOC => accepts RestaurantCard as input and returns enhanced RestaurantCard
   const EnhancedRestaurantCard = withPromotionLabel(RestaurantCard)

    return (shimmerEffect? <ShimmerUi/>:
      <div className='body'>
        { /* ------------------grid special items------------------------ */ }

        <div className="images-grid-container">
          <div className="grid-header">
             <h2>What's on your mind?</h2> 
          </div>
          <div className="res-special-items"> 
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
        <div className='top-rated-res-container'>
          <h2>Top restaurant chains</h2>
          <div className="filter-top-res-cards">
           {/* let filteredList = originalRestaurantsData.filter((restaurant) => {
                      return restaurant.info.avgRatingString >= 4.0 //filter for top rated restuarants
                      setRestaurants(filteredList);
                  }) */}
          </div>


        </div>
            
         {/* section contains restaurants with online food delievery */}

        <div className='online-food-restaurants'> 
          <h2>Restaurants with online food delievery</h2>  
          {/*----------div named Search-bar contain code to search desired food and restaurants from list or data -------------- */} 

          <div className="search-bar">
            <input type="text" placeholder="Search for food or restaurants" id="search-text"
            onChange={(e) => {
              searchText=e.target.value.toLowerCase();
            }}
            />
            <button className="search-btn" onClick={() => {
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
              ><i className=" fa fa-search"></i>
            </button>
          </div>
  
         
       {/*----------- div named filter-top-restaurants to show restaurants list having rating above or equal to 4.5 -------------------*/}

          <div className='filter-top-restaurants'>
              <button onClick={() => {
                  let filteredList = originalRestaurantsData.filter((restaurant) => {
                      return restaurant.info.avgRatingString >= 4.5 //filter for top rated restuarants
                  })
                  //console.log("filteredList", filteredList)
                  setRestaurants(filteredList) // Update the restaurants state with filtered results
                  //console.log("after filter restaurants", restaurants)
                }} >
                Top Rated Restaurants ➡️
              </button>
          </div>

   {/* -----------------div container which has all cards of restaurants with data -------------------------------*/}
          
            <div id="res-id" className='res-container'>
              {
                noResultsFound ? ( <div id="alert-message">No restaurants or food found matching your search criteria !</div>):(
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

// ----------export main Body component----------------------
export default Body



//other way to write code for search-bar
{/* <input type="text" placeholder="Search for restaurants or food" id="search-text"/>
          <button onClick={() => {
            const searchValue = document.getElementById("search-text").value.toLowerCase(); 
            let filteredResItems = restaurants.filter((restaurant) => {
              const restaurantName = restaurant.info.name.toLowerCase().replace(/[^\w]/g, '').trim(); // remove non-word characters and trim whitespace
              const cuisines = restaurant.info.cuisines.join(',').toLowerCase().replace(/[^\w]/g, '').trim(); // remove non-word characters and trim whitespace
              return restaurantName.includes(searchValue) || cuisines.includes(searchValue); 
            }); */}


// manual code of res-container
{/* <RestaurantCard name="Baskins" cuisines="Ice Cream, Desserts" deliveryTime="15-20 minutes" ratings="4.3 ⭐" />
    <RestaurantCard name="Honest" cuisines="North Indian" deliveryTime="10-15 minutes" ratings="2.3 ⭐" />
    <RestaurantCard name="Sankalp" cuisines="North Indian" deliveryTime="5-15 minutes" ratings="4.7 ⭐" />
    */}


