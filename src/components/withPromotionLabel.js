import React from 'react'

// name of HOC file should have prefix "with" i.e withPromotionLabel.js
//props are objects
const withPromotionLabel=(WrappedComponent)=> {
    return(props)=>{
        // console.log("props", props)
        const {promoted, ...enhancedProps}=props;
        // console.log("enhancedProps",props);
        return (
        <div>
           {promoted && <label style={{color:"red"}}>Promoted</label>}
           <WrappedComponent {...enhancedProps} />
           {console.log("enhanced props",props)}
        </div>

        )
    }
}
export default withPromotionLabel

