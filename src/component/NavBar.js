import React from "react";
import { Link } from "react-router-dom";
import './nav.css'
export default function NavBar() {
  return (
    <div className="nav">
    <ul>
    <li>
      <Link to='/'>Dashboard</Link>
    </li>
   <li>
    <Link to='/products'>Products </Link>
    
     </li>
    <li>
      <Link to='/orders'>Orders</Link>
      
      </li>
      <li>
      <Link to='/calenderview'>OrdersCalendarView</Link>
      
      </li>
  </ul>
  </div>         
  )
}


 