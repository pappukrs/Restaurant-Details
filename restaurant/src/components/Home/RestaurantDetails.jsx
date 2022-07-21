import React from "react";
import data from "../../db.json";
import Card from "./Card";
import {useState} from 'react'
import "./RestaurantDetails.css";
import SortBy from "./SortBy"

console.log(data);
const RestaurantDetails = () => {
  const[page,setPage]=useState(1)
  const[coll,setColl]=useState([...data.restaurant]);

    const handleSort=(val)=>{
      if(val==="1"){
         
      }
    }
  return (
    <>
     <SortBy/>

    <div className="card-grid">
      {coll.map((ele,idx) => {
        return (
          <>
           <Card {...ele} /> 
          </>
        );
      })}

   
    </div>
   

    </>
  );
};

export default RestaurantDetails;
