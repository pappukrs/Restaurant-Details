
import React from 'react'
import "./SortBy.css"
import Buttons from './Buttons.jsx'
const SortBy = () => {
  return (
    <div >
     
     <div className="sort">
     
      <div className="sortbystar">
         <Buttons text="1star"/>
         <Buttons text="2star"/>
         <Buttons text="3star"/>
         <Buttons text="4star"/>
         <Buttons text="5star"/>
      </div>
      <h1 >Sort By Various Parameters</h1>
      <div className="sortbypayment">
        <select >
           <option value="">sort by payment option</option>
           <option value="cash">cash</option>
           <option value="card">card</option>
           <option value="upi">upi</option>
           <option value="all">all</option>
        </select>
      </div>
     </div>
    </div>
  )
}

export default SortBy