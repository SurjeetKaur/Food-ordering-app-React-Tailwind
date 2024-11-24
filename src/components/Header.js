import React from 'react'
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {LOGO_IMG } from "../utils/Constants"; //By using curly braces {LOGO_IMG},JavaScript  import only the LOGO_IMG constant from imagesConstants file
import {useSelector} from 'react-redux'; //for cart update


const Header = () => {
    const [btnText, setBtnText] = useState("Sign In");
    useEffect(() => {
        //console.log("header useEffect is called");
    }, [])
    const cartItems= useSelector((store)=>store.cart.items);
    return (
        <div className="header w-full m-auto h-[100px] flex  flex-row justify-around shadow-bottomOnly">
            <div className="logo-container">
                <Link to="/"><img  class="w-[70px] h-[70px] mt-2 transition-transform duration-300 transform hover:scale-110"
                    alt="app-logo"
                    src={LOGO_IMG} />
                </Link>
            </div>
            <div className="nav-container">
                <ul className="flex flex-row space-x-4 pt-8 text-lg">
                    <li><Link to="/corporate" className='text-customGrey hover:text-customOrange'><i className=" fa fa-briefcase mr-2"></i>Swiggy Corporate</Link></li>
                    <li><Link to="/search" className='text-customGrey hover:text-customOrange'><i className="fa fa-search  mr-2"></i>Search</Link></li>
                    <li><Link to="/offers" className='text-customGrey hover:text-customOrange'><i className="fa fa-gift mr-2"></i>Offers</Link></li>
                    <li><Link to="/grocery" className='text-customGrey hover:text-customOrange'><i className='fa fa-leaf mr-2'></i>Grocery</Link></li>
                    <li><Link to="/help" className='text-customGrey hover:text-customOrange'><i className="fa fa-question-circle mr-2"></i>Help</Link></li>
                    <li>
                        <Link to='/#' className='text-customGrey hover:text-customOrange' onClick={()=>{
                                btnText=== "Sign In" ? setBtnText("Sign Out"): setBtnText("Sign In")
                                }}> 
                                <i className="fa fa-user mr-2"></i> 
                       
                            {/* <button onClick={()=>{
                                btnText=== "Sign In" ? setBtnText("Sign Out"): setBtnText("Sign In")
                                }}>
                                    {btnText}
                            </button> */}
                            {btnText}
                         </Link> 
                    </li>
                    <li><Link className='text-customGrey hover:text-customOrange'><i className="fa fa-shopping-cart"></i>Cart <span className='text-white text-base bg-green-500 h-6 w-6 inline-block text-center rounded-full'>{cartItems.length}</span></Link></li>

                </ul>
            </div>
        </div>
    )
}

export default Header;

