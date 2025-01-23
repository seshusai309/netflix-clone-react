import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Tv show</li>
            <li>Movies</li>
            <li>New and popular</li>
            <li>my List</li>
            <li>Browser by language</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img className='icons' src={search_icon} alt="" />
        <p>children</p>
        <img className='icons' src={bell_icon} alt="" />
        <div className="navbar_profile">
            <img className='profile' src={profile_img} alt="" />
            <img src={caret_icon} alt="" />
            <div className="dropdown"> 
                <p>Sign out of netflix</p>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default navbar 
