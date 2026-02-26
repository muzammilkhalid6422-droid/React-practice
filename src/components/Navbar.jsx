import React from 'react'
import logo from './Images/logo.png'
export default function Navbar() {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className=''>
          <li><a href="#">Card Catagory</a></li>
          <li><a href="#">Card Type</a></li>
          <li><a href="#">Card Quality</a></li>
          <li><a href="#">Create Card</a></li>
          <li><a href="#">MostCard</a></li>
          <li><a href="#">Loans</a></li>
          <li><a href="#">Insurance</a></li>
          <li><a href="#">Money</a></li>
        </ul>
      </div>
    </>
  )
}
