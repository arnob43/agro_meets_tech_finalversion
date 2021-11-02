import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';


const Forecast = () => {
   const [query, setQuery] = useState({});
   const [responseObj, setResponseObj] = useState({});
   
  
   function getForecast() {
      // weather data fetch function will go here
      fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${query}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
		"x-rapidapi-key": "b91ab34f23mshba05de4b56fb115p18981bjsnb327f9ef8862"
	} 
 }, [query])
.then(response => response.json())
.then(response => {
setResponseObj(response);
setQuery('')
 })
.catch(err => {
	console.error(err);
});
   }
   

   return (
      <div>
      <h2>Find Weather Conditions projections for 16 days</h2>
      <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
             value={query}
             onChange={e => {setQuery(e.target.value)}}
            //onClick={getForecast}
          />
        <button onClick={getForecast}>Get Forecast</button>
        <Conditions
               responseObj={responseObj}
               />
    </div>
    </div>
   )
   
}

export default Forecast;