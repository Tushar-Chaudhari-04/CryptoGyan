import React from 'react'
import mobileImage from '../images/Mobile Image.PNG'
import '../css/Home.css'

const Home = () => {
  return (
    <div className="home-container">
        <h2 className="heading">Jump start your crypto portfolio...</h2>
        <img className="mobile-img" src={mobileImage} alt="MobileImage"/>
    </div>
  )
}

export default Home