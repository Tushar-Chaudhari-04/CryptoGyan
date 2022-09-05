import React from 'react';
import "../css/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FaFacebook} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

const Footer = () => {
  const currentYear=new Date().getFullYear(); //get Current Year
 
  return (
    <div className="footer-data">
      <h4>Subscribe to our newsletter</h4>
      <p>Monthly digest of what's new and exciting from us.</p>

      <div className="newsletter">
        <form className="col-6 col-md-12 md-4 mx-5">
        <input type="email" className="form-control my-3 mx-5 footer-email" id="inputEmail" placeholder="Email Address"/>
        <span><FontAwesomeIcon icon="fa-solid fa-paper-plane-top" /></span>
        {/* <button type="submit" className="btn btn-primary my-3 footer-btn">Subscribe</button> */}
        </form>
      </div>
      <hr/>
    <div className="row foot-note">
      <div className="col-6 col-md-2 md-3">
          <h5>Company</h5>
          <ul>
            <li>About</li>
            <li> Careers</li>
            <li>Affiliates</li>
            <li>Investors</li>
            <li>Digital Asset Disclosures</li>
          </ul>
      </div>

      <div className="col-6 col-md-2 md-3">
          <h5>Developers</h5>
          <ul>
            <li>Cloud</li>
            <li>Wallet SDK</li>
            <li>Coinbase Pay SDK</li>
            <li>Query & Transact</li>
            <li>Sign in with Coinbase</li>
           
          </ul>
      </div>

      <div className="col-6 col-md-2 md-3">
          <h5>Support</h5>
          <ul>
            <li>Help center</li>
            <li>Contact us</li>
            <li>Create account</li>
            <li>Supported crypto</li>
            <li>Legal & privacy</li>
            <li>Supported countries</li>
            <li>Status</li>
          </ul>
      </div>
      {/* <div className="space-btw">
      <div className="space-height"></div>
      <br/>
      </div> */}
      <div className="col-6 col-md-2 md-3 ">
          <h5>Learn</h5>
          <ul>
            <li>Ethereum Merge</li>
            <li>Browse crypto prices</li>
            <li>Coinbase Bytes newsletter</li>
            <li>Crypto basics</li>
            <li>Market updates</li>
            <li>What is Bitcoin?</li>
          </ul>
      </div>
     
      <div className="col-6 col-md-3 md-3">
          <h4 className="footer-icon">CryptoGyan</h4>
          <p>© {currentYear} Coinbase.</p>
          <p className="social-icon"><FaInstagram/> <FaTwitter/> <FaFacebook/> <FaLinkedin/></p>
      </div>
    </div>
    <div>
      </div>
     
      <div className="space-height">
        <br/><br/>
      </div>
    </div>
  )
}

export default Footer


      {/* <div className="col-6 col-md-2 md-3 ">
          <h5>Businesses</h5>
          <ul>
            <li>Institutional</li>
            <li>Prime</li>
            <li>Asset Hub</li>
            <li>Commerce</li>
            <li>NFT</li>
            <li>Wallet</li>
            <li>Buy & Sell</li>
            <li>What is a blockchain?</li>
          </ul>
      </div>
      

      <div className="col-6 col-md-2 md-3 ">
          <h5>Indiviuals</h5>
          <ul>
            <li>Buy & Sell</li>
            <li>NFT</li>
            <li>Wallet</li>
            <li>Commerce</li>
            <li>Payment methods</li>
            <li>Supported crypto</li>
            <li>Legal & privacy</li>
            <li>Supported countries</li>
          </ul>
      </div> */}