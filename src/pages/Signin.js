import React from 'react';
import "../css/Signin.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";

const Signin = () => {
  const user=true;

  return (
    <div>
        <div className="Signin-main shadow-lg">
            <h3 className="Signin-heading">cryptogyan</h3>
            <h3 className="Signin-head">Sign in to cryptogyan</h3>

            <form class="mb-3 signin-email">
                <label for="sign-email" class="form-label">Email address</label>
                <input type="email" class="form-control" id="sign-email" placeholder="Your email address"/>
                <p className="Signin-para">Not your device? Use incognito mode to sign in privately.</p>
                <Link to={user?"/":"/login"}><button className="btn btn-primary btn-lg Signin-btn">Continue</button></Link>
            </form>
            <div className="Signin-bottom">
                <Link to="/register"><h6 className="Signin-bottom-head">Create account</h6></Link>
                <p style={{color:"#0667d0",fontSize:"14.5px"}}>Sign in to a business account</p>
                <p style={{color:"#0667d0",fontSize:"14.5px",marginTop:"-15px"}}>Privacy policy</p>
            </div>
        </div>
    </div>
  )
}

export default Signin