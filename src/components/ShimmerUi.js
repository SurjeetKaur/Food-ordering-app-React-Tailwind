import React from 'react'
import { ShimmerSimpleGallery } from "react-shimmer-effects";

const ShimmerUi = () => {
  return (
    <>
    {/* Circular Image Gallery with Caption*/ }
  <ShimmerSimpleGallery imageType="circular" imageHeight={100} row={1} caption/>

  {/* Card Shimmer */}
  <ShimmerSimpleGallery card imageHeight={300} col={4} caption />
  </>
  )
};
export default ShimmerUi;



// manual code of shimmer setup
// import React from 'react'

// const ShimmerUi=()=>{
//     return(
//         <div className="shimmer" >
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
//             <div className="shimmer-inner-div"></div>
        
//         </div>
// )}
   

// export default ShimmerUi
