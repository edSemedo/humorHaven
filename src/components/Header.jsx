import React from 'react'
import HH_logo from '../assets/HH_logo.jpg'

export default function Header() {
  return (
    <div className="headerContainer" >
        <img  src={HH_logo} alt="HeaderLogo" />
        <h2>Humor Haven</h2> 
    </div>
  )
}
