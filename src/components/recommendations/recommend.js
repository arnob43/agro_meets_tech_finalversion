const Reco = (props) => {
    return (
        <div>
            {Math.round(props.responseObj.main.temp) >= 20 && ((props.responseObj.main.humidity)) <= 70 ?
                 <div>
                 <p>alarm! watering required within 24 hours </p>
                 </div>
             : null
             }
 
        </div>
    )
 }
 export default Reco;