import React from 'react';
import "../css/SignUp.css";
import signupImage from "../images/signup-sideImage.PNG";

const SignUp = () => {

    const SignUpStyle={
        width:"100%",
        height:"100%",
        justifyContent:"center",
        padding:"0 0 3% 0"
    }

  return (
    <div className="signup-main">
    <div className="signup">
    <h1 className="signup-heading">Create an account</h1>
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
        <h1> Do more with crypto, only on Coinbase</h1>
        <p>Set up your account and verify your photo ID to get started on trading crypto.</p>
        <img src={signupImage} alt="SignUpSideImage"/>            
    </div>
    </div>
  )
}

export default SignUp
