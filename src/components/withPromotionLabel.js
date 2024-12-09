import React from 'react'

// name of HOC file should have prefix "with" i.e withPromotionLabel.js
//props are objects
const withPromotionLabel=(WrappedComponent)=> {
    return(props)=>{
        // console.log("props", props)
        const {promoted, ...enhancedProps}=props;
         console.log("enhancedProps",props);
        return (
        <div>
           {promoted && <label className="absolute bg-customOrange text-white  px-2 z-10 rounded-md">Promoted</label>}
           <WrappedComponent {...enhancedProps} />
            
        </div>

        )
    }
}
export default withPromotionLabel;

