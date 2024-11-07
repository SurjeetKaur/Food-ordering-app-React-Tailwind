import React from 'react'
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {LOGO_IMG } from "../utils/Constants"; //By using curly braces {LOGO_IMG},JavaScript  import only the LOGO_IMG constant from imagesConstants file


const Header = () => {
    const [btnText, setBtnText] = useState("Sign In");
    useEffect(() => {
        console.log("header useEffect is called");
    }, [])
    return (
        <div className="header w-full h-[100px] flex  flex-row">
            <div className="logo-container">
                <Link to="/"><img  class="w-[80px] h-[80px]"
                    alt="app-logo"
                    src={LOGO_IMG} />
                </Link>
            </div>
            <div className="nav-container ml-4">
                <ul className="flex flex-row space-x-4">
                    {/* <li><a href="#home">Home</a></li>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#contact">Contact us</a></li>
                    <li><a href="#cart">Cart</a></li> */}

                    <li><Link to="/corporate" className='nav-link'><i className=" fa fa-briefcase"></i>Swiggy Corporate</Link></li>
                    <li><Link to="/search" className='nav-link'><i className="fa fa-search"></i>Search</Link></li>
                    <li><Link to="/offers" className='nav-link'><i className="fa fa-gift"></i>Offers</Link></li>
                    <li><Link to="/help" className='nav-link'><i className="fa fa-question-circle"></i>Help</Link></li>
                    <li>
                        <Link to='/#' className='nav-link' onClick={()=>{
                                btnText=== "Sign In" ? setBtnText("Sign Out"): setBtnText("Sign In")
                                }}> 
                                <i className="fa fa-user"></i> 
                       
                            {/* <button onClick={()=>{
                                btnText=== "Sign In" ? setBtnText("Sign Out"): setBtnText("Sign In")
                                }}>
                                    {btnText}
                            </button> */}
                            {btnText}
                         </Link> 
                    </li>
                    <li><Link to="/cart" className='nav-link'><i className="fa fa-shopping-cart"></i>Cart</Link></li>

                </ul>
            </div>
        </div>
    )
}

export default Header;

