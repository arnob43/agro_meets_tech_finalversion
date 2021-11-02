import React from 'react';
import './table.css';
const Conditions = (props) => {
   return (
       <div>
           {props.responseObj.cod === 200 ?
            <div>  
                   <p>It is currently {Math.round((props.responseObj.main.temp)-273.15)} degrees out with {props.responseObj.weather[0].description}.</p>
                   
                 <table>    
               
                <tr>
                <th> Day </th>
                   <th>Humidity</th>
                   <th>Temperature</th>
                   <th>Pressure</th>
                   {/*API problem so aborting this
                    <th>Windspeed</th> */}
                   <th>Type</th>
                   </tr>
                   
                    <tr>
                    <td> 1 </td>
                    <td>{(props.responseObj.main.humidity)}</td>
                    <td>{Math.round((props.responseObj.main.temp)-273.15)}</td>
                    <td>{(props.responseObj.main.pressure)}</td>
                    {/* <td>{(props.responseObj.main.speed)}</td> */} 
                    <td>{(props.responseObj.weather[0].description)}
                    </td>
                    </tr>

                    <tr>
                    <td> 2 </td>
                    <td>{(props.responseObj.main.humidity)}</td>
                    <td>{Math.round((props.responseObj.main.temp)-273.15)}</td>
                    <td>{(props.responseObj.main.pressure)}</td>
                    {/* <td>{(props.responseObj.main.windspeed)}</td> */}
                    <td>{(props.responseObj.weather[0].description)}
                    </td>
                    </tr>
                    
                    <tr>
                    <td> 3 </td>
                    <td>{(props.responseObj.main.humidity)}</td>
                    <td>{Math.round((props.responseObj.main.temp)-273.15)}</td>
                    <td>{(props.responseObj.main.pressure)}</td>
                    {/* <td>{(props.responseObj.main.speed)}</td> */}
                    <td>{(props.responseObj.weather[0].description)}
                    </td>
                    </tr>
                    
                    <tr>
                    <td> 4 </td>
                    <td>{(props.responseObj.main.humidity)}</td>
                    <td>{Math.round((props.responseObj.main.temp)-273.15)}</td>
                    <td>{(props.responseObj.main.pressure)}</td>
                    {/* <td>{(props.responseObj.main.speed)}</td> */}
                    <td>{(props.responseObj.weather[0].description)}
                    </td>
                    </tr>
                    
                    <tr>
                    <td> 5 </td>
                    <td>{(props.responseObj.main.humidity)}</td>
                    <td>{Math.round((props.responseObj.main.temp)-273.15)}</td>
                    <td>{(props.responseObj.main.pressure)}</td>
                    {/* <td>{(props.responseObj.main.speed)}</td> */}
                    <td>{(props.responseObj.weather[0].description)}
                    </td>
                    </tr>
                    
                    
                     </table> 
               </div>
           : null
           }
       </div>
   )
}

export default Conditions;