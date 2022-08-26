import React,{useState} from 'react'
import mobileImage from '../images/Mobile Image.PNG'
import '../css/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {

  return (
    <div className="home-container">
        <div className="main-text">
          <sapn>
          <FontAwesomeIcon icon="fa-brands fa-btc" /><p>Jump start your portfolio</p>
          </sapn>
          <h3 className="heading">Jump start your crypto portfolio</h3>
        </div>
        <img className="mobile-img" src={mobileImage} alt="MobileImage"/>
        
    </div>
  )
}

export default Home