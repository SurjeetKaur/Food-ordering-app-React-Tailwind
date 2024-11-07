import React from 'react'
import { RES_IMG_URL} from '../utils/Constants' //to access one out of multiple components from one page use {}


// third VERSION OF FUNCTION RestaurantCard  using map  #dynamic

function RestaurantCard({ name,discountHeader,discountSubHeader,discountTag ,cuisines, ratings, deliveryTime,areaName, cloudinaryId,}) {
    return (
        <div className='res-card'>
            <img className='res-logo' src={`${RES_IMG_URL}${cloudinaryId}`} alt="restaurant image" />
            <span className="res-text">{discountHeader} {discountSubHeader} {discountTag}</span>
            <div className="res-description">
                <h3>{name}</h3><br></br>
                <h3><i className="fa fa-star"></i>{ratings} •{deliveryTime}</h3>
                <p>{cuisines}</p> 
                <p className="area-uppercase"><strong><i className=" fas fa-map-pin"></i>{areaName}</strong></p>
            </div>
        </div>
    )
}
export default RestaurantCard



//FIRST VERSION OF FUNCTION RestaurantCard() #static

// function RestaurantCard() {
//     return (
//         <div className='res-card'>
//             <img className='res-logo' src={TEMP_RES_LOGO} alt="res-logo" />
//             <span className="res-text">ITEMS AT $50</span>
//             <h3> Burger King</h3>
//             <h4><i className="fa fa-star" id="star-icon"></i>4.3 . 25-30 mins</h4>
//             <p>Grilled Sandwich</p>
//             <p>Toronto</p>
//         </div>
//     )
// }

//SECOND VERSION OF FUNCTION RestaurantCard() using  traditional method to use props

// function RestaurantCard(props) {
//     return (
//             <div className='res-card'>
//             <img className='res-logo' src={TEMP_RES_LOGO} alt="res-img" />
//             <h3>{props.name}</h3>
//             <h3>{props.cuisines}</h3>
//             <h3>{props.ratings}</h3>
//             <h3>{props.deliveryTime}</h3>
//         </div>
//     )
// }

// Array destructing  recommmeded way to use props
// function RestaurantCard(props) {
//     const {name, cuisines, ratings, deliveryTime} = props;
//         return (
//                 <div className='res-card'>
//                 <img className='res-logo' src={TEMP_RES_LOGO} alt="res-img" />
//                 <h3>{name}</h3>
//                 <h3>{cuisines}</h3>
//                 <h3>{ratings}</h3>
//                 <h3>{deliveryTime}</h3>
//             </div>
//         )
//     }


