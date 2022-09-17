import React ,{useState} from 'react';
import "../css/Signin.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link
} from "react-router-dom";

const Signin = () => {
  const user=false;
  const navigate = useNavigate();
  const url="http://localhost:3000/crypto/auth/login"
  const[userData,setUserData]=useState({
    email:"",
    password:""
  });

  let name,value;

  const handleData=(e)=>{
    console.log(e.target.value)
    name=e.target.id;
    value=e.target.value;
    console.log(name,value);
    setUserData({
        ...userData,[name]:value
    });
}

const submitData=(e)=>{
  e.preventDefault();

  axios.post(url,{
      email:userData.email,
      password:userData.password
  }).then(res=>{
      console.log(res);
      if(res.request.status===201){          
          alert("User Login Successfully");
          navigate("/spinner")
          
         setTimeout(() => {
                  navigate("/");
          }, 3000);
          
          } else{
            alert("User Credentials are Invalid...");
          }
  }).catch(err=>{
      console.log(err);
  })
}
  return (
    <div>
        <div className="Signin-main shadow-lg">
            <h3 className="Signin-heading">cryptogyan</h3>
            <h3 className="Signin-head">Sign in to cryptogyan</h3>

            <form className="was-validated mb-3 signin-email " novalidate>          
                <div>
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Your email address"
                      value={userData.email} onChange={handleData} required
                    />
                    <div class="invalid-feedback">
                      Please Enter Email.
                    </div>
                 </div>

                 <div>
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Your password"
                      value={userData.password} onChange={handleData} required
                    />
                    <div class="invalid-feedback">
                      Please Enter Password.
                    </div>
                 </div>

                <p className="Signin-para">Not your device? Use incognito mode to sign in privately.</p>
                <button className="btn btn-primary btn-lg Signin-btn" onClick={submitData}>Continue</button>
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

//<Link to={user?"/":"/login"}>