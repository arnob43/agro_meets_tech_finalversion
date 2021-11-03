import React from 'react';
import './table.css';

const Conditions = (props) => {
  
   return (
       <div>
       
       {/* check here to find out the different parameter names */}
        {/* <p> {JSON.stringify(props.responseObj)} </p>  */}
           {props.responseObj.cod === 200 ?
            
            
            <div>  
                   <p><span>It is currently {Math.round((props.responseObj.main.temp)-273.15)} degrees outside with {props.responseObj.weather[0].description} in {(props.responseObj.name)}.</span></p>
                  
                 <table>    
               <thead>
                <tr>
                <th> Country </th>
                   <th>Humidity</th>
                   <th>Temperature</th>
                   <th>Pressure</th>
                    <th>Windspeed</th>
                   <th>Type</th>
                   </tr>
                   </thead>
                   
                   <tbody>
                    <tr>
                    <td> {(props.responseObj.sys.country)} </td>
                    <td>{(props.responseObj.main.humidity)}</td>
                    <td>{Math.round((props.responseObj.main.temp)-273.15)}</td>
                    <td>{(props.responseObj.main.pressure)}</td>
                    <td>{(props.responseObj.wind.speed)}</td> 
                    <td>{(props.responseObj.weather[0].description)}
                    </td>
                    </tr>
                    </tbody>
                     </table> 
               </div>
           : null
           }
       </div>
   )
}

export default Conditions;