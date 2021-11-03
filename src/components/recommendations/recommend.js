import React from "react";

const Reco = (props) => {
    return (
        <div>
            {props.responseObj.cod === 200 && props.responseObj.main.humidity<=70 && props.responseObj.main.temp>=200 ?
                
                <div><p>Alert!! watering needed in 24 hours.</p></div>
     
            : null
            }
        </div>
    )
 }


export default Reco; 
