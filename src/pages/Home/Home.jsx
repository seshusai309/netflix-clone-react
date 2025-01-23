import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../components/TitleCards/TitleCard'
import Footer from '../../components/Footer/footer'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="hero">
        <img src={hero_banner} alt="" className='banner-image'/>
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-image'/>
          <p>Discovering his ties to a secret ancient order , 
            a youngan living in modren istambal to save the 
            city from an immortal enemy</p>
          <div className="hero-btns">
            <button className='btn'><img src={play_icon} alt="" />play</button>
            <button className='btn dark-btn'><img src={info_icon } alt="" />more Info</button>
          </div>
          <TitleCard/>
        </div>
      </div>
      <div className='more-cards'>
      <TitleCard title={"Blockbuster MOvies"}/>
      <TitleCard title={"only on netflix"}/>
      <TitleCard title={"upcoming"}/>
      <TitleCard title={"top pis for you"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
