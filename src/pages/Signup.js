import React from 'react';
import "../css/SignUp.css";
import signupImage from "../images/signup-sideImage.PNG";
import faArrowAltCircleLeft from "@fortawesome/free-regular-svg-icons";
import leftArrow from "../images/left arrow.PNG";
import redirectHome from "../images/redirectHome.PNG";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
    Link
  } from "react-router-dom";

const SignUp = () => {

    const SignUpStyle={
        width:"100%",
        height:"100%",
        justifyContent:"center",
        padding:"0 0 3% 0"
    }

  return (
    <div>
    <div className="signup-header">
        <Link to="/"><img style={{marginLeft:"10px",marginTop:"5px",height:"55px"}} src={redirectHome} /></Link>
        <Link to="/login"><p style={{marginRight:"30px",marginTop:"20px",textDecorationLine:"none"}}>Sign In</p></Link>
    </div>
    <hr/>
    <div className="signup-main">
    <div className="signup-space">

    </div>
    <div className="signup">
    <h3 className="signup-heading"> <span><img className="leftArrowImage" src={leftArrow} alt="left-arrow"/>Create an account</span></h3>
    <p>Required fields have an asterisk: *</p>
    <form style={SignUpStyle}>
        <div className="row">
            <div className="col-md-6">
                <label htmlFor="firstName">First name*</label>
                <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
            </div>

            <div className="col-md-6">
                <label htmlFor="lastName">Last name*</label>
                <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
            </div>

            <div>
                <label htmlFor="email">Email*</label>
                <input type="email" className="form-control" id="email" placeholder="Email"/>
            </div>

            <div>
                <label htmlFor="password">Password*</label>
                <input type="password" className="form-control" id="password" placeholder="Minimum 8 Characters"/>
            </div>

            <div class="col-md-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <span>
                        I certify that I am 18 years of age or older, I agree to the <a className="user-agreement">User Agreement</a>, and I have read the <a className="user-agreement">Privacy Policy</a>.
                    </span>
                    {/* <label class="form-check-label" htmlFor="invalidCheck">
                        Agree to terms and conditions
                    </label> */}
                    <div class="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
        </div>
        <button type="button" className="btn btn-primary btn-lg signup-btn" >Create a free Account</button>
        <p className="signup-lastpara"><a className="user-agreement">Sign up</a> for a business account</p>
    </form>
    </div>

    <div className="signup-rightside">
        <h1 className="signup-rightside-head"> Do more with crypto, only on Coinbase</h1>
        <p className="signup-rightside-desc">Set up your account and verify your photo ID to get started on trading crypto.</p>
        <img src={signupImage} alt="SignUpSideImage"/>            
    </div>
    </div>
    </div>
  )
}

export default SignUp
