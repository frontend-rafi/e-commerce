import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Filter = () => {
    const [radioData,setRadioData]= useState(""); 
    console.log('data' ,radioData);
   
    return (
    <>
     <form style={{height:"50px", background: "white"  }}>
        <label style={{marginRight:"5px",padding: "5px" }}>All
        <input type="radio" 
         onChange={(e)=> setRadioData(e.target.value)}
        name="test"
        value=""
      
       />
        </label>
        <label style={{marginRight:"5px",padding: "5px" }}>Samsung
        <input type="radio" 

         onChange={(e)=> setRadioData(e.target.value)}
      value="samsung"
    
        name="test" />
        </label>
        <label style={{marginRight:"5px",padding: "5px" }}>Moto
        <input type="radio" 
         onChange={(e)=> setRadioData(e.target.value)}
        name="test" 
        
      
        value="Moto" />
        </label>
        <label style={{marginRight:"5px",padding: "5px" }}>Xiaomi
        <input type="radio" 
         onChange={(e)=> setRadioData(e.target.value)}
       
        name="test" value="Xiaomi"  />
        </label>
        <label style={{marginRight:"5px",padding: "5px" }}>Nokia
        <input type="radio" 
         onChange={(e)=> setRadioData(e.target.value)}
        name="test" value="Nokia"  />
        </label>
        <label style={{marginRight:"5px",padding: "5px" }}>Apple
        <input type="radio" 
         onChange={(e)=> setRadioData(e.target.value)}
        name="test" value="Apple"  />
        </label>
       
     </form>
    </>
  )
}

export default Filter
