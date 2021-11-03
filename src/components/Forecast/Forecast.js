import React, { useState } from 'react';
import Conditions from '../Conditions/Conditions';
import Reco from '../recommendations/recommend';

const Forecast = () => {
   const [query, setQuery] = useState({});
   const [responseObj, setResponseObj] = useState({});
   const [loading, setLoading] = useState(false);
  
   function getForecast() {
      setLoading(true);
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
 setLoading(false);
 })
.catch(err => {
    setLoading(false);
   console.log(err.message);
});
console.log(responseObj) }


   const handleSubmit = e => {
      getForecast();
    };
   
   const handleKeypress = e => {
      if(e.key === 'Enter'){
      handleSubmit();
    }
  };

   return (
      <div>
      <h2><span> Enter your city name to find out the weather and recommendations </span> </h2>
      <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search your city"
             value={query}
             onChange={e => {setQuery(e.target.value)}}
             onKeyPress={handleKeypress}
             />
          
        <button onClick = {handleSubmit} type="submit">Get Forecast</button>
        <Conditions
               responseObj={responseObj}
               loading={loading}
               query={query}
               />
               <Reco responseObj={responseObj} 
                  loading={loading}
                  query={query}
               />     
    </div>
    </div>
   )
   
}

export default Forecast;