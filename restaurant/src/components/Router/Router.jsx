import React from 'react'
import {Routes,Route} from 'react-router-dom'
import  AddReastaurants from '../Home/AddReastaurants'
import RestaurantDetails from '../Home/RestaurantDetails.jsx'
const Router = () => {
  return (
    <Routes>
        <Route path="/" element={<RestaurantDetails/>} />
        <Route path="/addrestaurants" element={<AddReastaurants/>}  />
    </Routes>
  )
}

export default Router