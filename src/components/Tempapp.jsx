import React, { useEffect, useState } from 'react'
import './css/style.css'

export default function Tempapp() {

    const[city,setCity]=useState(null);
    const [search,setSearch] = useState("Delhi");
    useEffect(()=>{
       const fetchApi = async() =>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d57175abb1d70e54b6635b2d54671552`;
        const response = await fetch(url)
        // console.log(response)
        const resJson = await response.json()
        setCity(resJson.main)
       }

        fetchApi();
    },[search])

  return (
    <>
        <div className="box">
            <div className="inputData">
                <input type="search" 
                 className='inputField'
                 value={search}
                 onChange={( event ) =>{
                    setSearch(event.target.value)
                 }}
                  />
            </div>
        
              {!city ? (
                 <p className='errorMsg'>No Data found</p>
              ) : (
                <div>
                <div className="info">
                    <h2 className='location'>
                        <i className='fas fa-street-view'></i>{search}
                    </h2>
                    <h1 className="temp">
                     {city.temp}cel
                    </h1>
                    <h3 className='tempmin_max'>Min:{city.temp_min}cel |Max:{city.temp_max}cel</h3>
                </div>
                 <div className="wave -one"></div>
                 <div className="wave -two"></div>
                 <div className="wave -three"></div>
                 </div>

              )

              }
             
         </div>
    </>
  )
}
