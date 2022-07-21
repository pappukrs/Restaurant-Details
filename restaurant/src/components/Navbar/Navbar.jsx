import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="item1">
            <Link to="/">Restaurant</Link>
            </div>
        <div className="item2">
            <Link to="/addrestaurants"> Add Restaurant</Link>
            </div>
    </div>
  )
}

export default Navbar