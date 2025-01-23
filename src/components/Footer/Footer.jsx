import React from 'react'
import youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>
      <ul>
        <li>Audio Discription</li>
        <li>Help center</li>
        <li>Gift Cards</li>
        <li>Media center</li>
        <li>Invester Relations</li>
        <li>Jobs</li>
        <li>Terms of uses</li>
        <li>Privacy</li>
        <li>legal notes</li>
        <li>Cookie preferences</li>
        <li>Corporate information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>@ 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
