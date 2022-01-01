import React,{useState} from 'react'
// import csc from "country-state-city";
import { Country, State, City }  from 'country-state-city';


export default function Add() {
    
    // const county = Country.getAllCountries()
    const state = State.getAllStates()
    // const city = City.getAllCities()

    // console.log(Country.getAllCountries())
    // console.log(city)

    // let cities = []
    // for (let key in city) {
    //     if(city[key].countryCode === "BD"){
    //         cities.push(city[key].name)
    //     }
        // console.log(key, state[key].name);
    //   }

    //   console.log(cities);


    const getDiv = State.getStatesOfCountry("BD").filter((dataItem) =>  {
        if (dataItem.name.includes("Division")) return true;
    })




    // let Country = require('country-state-city').Country;
    // let State = require('country-state-city').State;

    // const [cn,setCn] = useState({})

    // for (let index = 0; index < state.length; index++) {
        
        // for(let j = 0; j < this.state[index].length; j++){
        //     // if(j)
        // }
    // }
    let dist = []
    for (let key in state) {
        if(state[key].countryCode === "BD"){
            dist.push(state[key].name)
        }
        // console.log(key, state[key].name);
      }

    // console.log(dist)

    return (
        
        <>
            {/* {county.map((data,index) => {
                return(
                    <p key={index}>
                        {data.name === 'Bangladesh' ? data.name: null}
                    </p>
                )
            })} */}
            <select>
            {getDiv.map((data,index)=>{
                return(
                    <option>
                        {data.name}
                        {data.isoCode}
                    </option>
                )
            })}
            </select>

            <select>
            {dist.map((data,index) => {
                return(
                    <option value={data} key={index}>
                        {data}
                    </option>
                )
            })}
            </select>
            

            {/* <select> */}
            {/* {state.map((data,index) => {
                return(
                    <option key={index}>{data.countryCode === 'BD' ? data.name:null}</option>
                )
            })} */}
            {/* </select> */}

        </>
    )
}
