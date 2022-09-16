import React from 'react'
import "../css/MiddlePage.css"

import secureStorage from "../images/storage.PNG"
import bestPractice from "../images/bestPractice.PNG"
import industryPractice from "../images/industryPractice.PNG"
import account from "../images/account.PNG"
import bank from "../images/bank.PNG"
import buysell from "../images/b&s.PNG"
import {FaTelegramPlane} from "react-icons/fa";

const MiddlePage = () => {
  return (
    <div className="middle">
        <h2 className="heading-data">The most trusted cryptocurrency platform</h2>
        <p className="middledata">Here are a few reasons why you should choose Coinbase</p>
        <div className="feature">
            <div className="feature-info1">
                <img src={secureStorage} />
                <h4>Secure Storage</h4>
                <p style={{fontSize:"20px",fontWeight:200}}>We store the vast majority of the digital assets in secure offline storage.</p>
                <a href="/">Learn more </a>
            </div>
            <div className="feature-info2">
                <img src={industryPractice} />
                <h4>Industry best practices</h4>
                <p style={{fontSize:"20px",fontWeight:200}}>Coinbase supports a variety of the most popular digital currencies.</p>
                <a href="/">Learn more </a>
            </div>
        </div>

        <div className="data">
            <table >
                <tr className="data-bg">
                    <th className="data-bg">₹44,00,000 Cr</th>
                    <th className="data-bg">100+</th>
                    <th className="data-bg">8.9+ Cr</th>
                </tr>
                <tr className="data-bg">
                    <td className="data-bg">Quarterly volume traded</td>
                    <td className="data-bg">Countries supported</td>
                    <td className="data-bg">Verified users</td>
                </tr>
            </table>
        </div>

        <div className="bottom-data">
            <h2 className="bottom-head">Get started in a few minutes</h2>
            <p className="bottom-info">Coinbase supports a variety of the most popular digital currencies.</p>
        </div>

        <div className="bottom-features">
            <div>
                <img src={account}/>
                <p>Create an Account</p>
            </div>

            <div>
                <img src={bank}/>
                <p>Link your bank account</p>
            </div>

            <div>
                <img src={buysell}/>
                <p>Start buying & selling</p>
            </div>
        </div>
        <div className="middle-newsletter">
           <h4>Subscribe to our newsletter <FaTelegramPlane/></h4>
           <p>Monthly digest of what's new and exciting from us.</p>

           <div className="newsletter">
        <form className="col-6 col-md-12 md-4 mx-5 ">
        <div className="footer-em">
          <input type="email" className="form-control my-3 mx-5 footer-email" id="inputEmail" placeholder="Email Address"/>
          <button type="submit" className="btn btn-primary btn-lg" style={{ width:"130px",height:"60px",padding:"10px",marginTop:"13px"}}>Subscribe</button>
        </div>
        
        {/* <span style={{width:"50px",height:"60px;"}}><FaTelegramPlane /></span> */}
        {/* <button type="submit" className="btn btn-primary my-3 footer-btn">Subscribe</button> */}
        </form>
      </div>
      <br/>
        </div>
    </div>
  )
}

export default MiddlePage

