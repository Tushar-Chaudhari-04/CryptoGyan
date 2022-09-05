import React,{useState} from 'react'
import mobileImage from '../images/Mobile Image.PNG'
import mobile from '../images/mobile2.PNG'
import bitcoinImage from '../images/bitcoin.png'
import rightArrow from '../images/right-arrow.png'
import '../css/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Portfolio from './Portfolio';
import MiddlePage from "../pages/MiddlePage";
import CryptoData from "../pages/CryptoData";

const Home = () => {
  // props.mode==="dark"?"black":"white"

  // const myStyle={
  //   backgroundColor:props.mode==="dark"?"black":"white",
  //   color:props.mode==="dark"?"#ffff":"black",
  // }

  // mode={mode} onSlide={onSlide}
  return (
    <div >
    <Navbar title="CryptoGyan"/>
   
    <div className="home-container" >
        <div className="main-text">
          <span className="title">
          <img className="bitcoin" src={bitcoinImage}/>
           Jump start your portfolio
           <img className="right-arrow" src={rightArrow}/>
          </span>
          <h3 className="heading">Jump start your crypto portfolio</h3>
          <p className="heading-desc">Coinbase is the easiest place to buy and sell cryptocurrency.
          Sign up and get started today.</p>

          <form className="">
            <div className="email-form">
             <input type="email" className="form-control my-3 email" id="inputEmail" placeholder="Email Address"/>
             <button type="submit" className="btn btn-primary my-3 email-btn">Get Started</button>
            </div>
         </form>
        </div>
        <img className="mobile-img" src={mobileImage} alt="MobileImage"/>
       
    </div>
    {/* <CryptoData/> */}
    <Portfolio />
    <MiddlePage/>
    <Footer/>
    </div>
  )
}

export default Home