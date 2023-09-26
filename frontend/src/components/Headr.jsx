import React , { useState, useEffect }from 'react'
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
 
   <div>
    <NavLink to = "/"> Home </NavLink>  
    </div>
   
    </header>
   
   )
  }