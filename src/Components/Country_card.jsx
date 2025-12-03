
import React, { useEffect, useState } from "react"

const Card =({flag,name})=>{
    return (
        <div 
        style={{
            flexBasis: "calc(100% / 7 - 10px)",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            gap:"4px",
            padding:"10px",
            border:"1px solid gray",
            borderRadius:"4px",
            height:"200px",
            width:"200px"
        }}>
        <img 
        src={flag}
        alt={`Flag of ${name}`}
        style={{
            height:"75px",
            width:"100px"
        }}
        
        />
        <h3>{name}</h3>
        
        </div>
    );
};
const API="https://xcountries-backend.labs.crio.do/all"
export default function CountryCard(){
    
    const [countries,setCountries]=useState([])
    useEffect(()=>{
       
       const fetchCountries=async()=>{
        try{
        const response=await fetch(API)
        const jsonRes=await response.json()
        setCountries(jsonRes);

       } catch (error) {
       console.error("Error fetching data",error)
       }
    }
       fetchCountries();
    },[]);
    return (
       <div
       style={{
        display:"flex",
        flexWrap:"wrap",
        gap:"10px"
       }}
       >
      { countries.map((country)=>(
       <Card flag={country.flag} name={country.name} key={country.abbr} />
       ))}
       </div>
    )
}