import { useEffect,useState } from "react";
import React from 'react'
import {VEGETABLES_GROCERY} from "../utils/Constants"; 
import A0S from "aos";
import "aos/dist/aos.css";

function Grocery(props) {
   useEffect(() => {
      A0S.init({
        duration: 3000, // miliseconds
        //easing: 'ease-in-out', // easing function
        once: true, // animations only once
      });
    }, []);
    const {businessName}=props;
    const [showMessage, setShowMessage] = useState(false);

  const handleAddToCart = () => {
    setShowMessage(true);

    // Hide the message after 3 seconds
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  };
  
  return (
    <div className='w-8/12 m-auto h-auto text-center contact-us-page p-4'>
    <h1 className='text-3xl p-8' data-aos="fade-in">{businessName}</h1>
     {/* Show Message */}
      {showMessage && (
        <div className="bg-yellow-100 text-yellow-800 font-medium text-center p-3 mb-4 rounded shadow">
          🛒 Cart functionality coming soon!
        </div>
      )}
    <ul className="space-y-4">
    {VEGETABLES_GROCERY?.map((veg) => (
      <li key={veg.id} className="flex justify-between items-center p-4 border rounded shadow">
        <div className="text-6xl" data-aos="fade-in">{veg.emoji}</div>
          <div className="flex-1 ml-4">
            <h2 className="text-lg font-bold">{veg.name}</h2>
            <p className="text-gray-500 text-sm mb-1">{veg.description}</p>
            <p className="text-sm">
              <span className="text-gray-600 font-medium">Unit:</span> {veg.unit}
            </p>
            <p className="text-sm">
              <span className="text-gray-600 font-medium">Category:</span> {veg.category}
            </p>
            <p className="text-sm">
              <span className="text-gray-600 font-medium">Organic:</span> {veg.isOrganic ? "Yes ✅" : "No ❌"}
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col items-center">
            <p className="text-lg font-semibold text-gray-800">{veg.price}</p>
            <button className="mt-2 bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
      </li>
      ))}
      </ul>
    </div>
  )
}

export default Grocery