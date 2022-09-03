import React, { useState } from 'react'
import '../css/Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Navbar = (props) => {

  const [text,setText]=useState("Enable Dark Mode");


  const brand={
    color: "rgb(0, 82, 255)",
    fontWeight:"300"
  }
  const myStyle={
    color:"black",
    fontFamily: "Arial",
    // fontSize:"20px",
    //backgroundColor:"black",
    marginTop:"0px",
    fontWeight:"600"
  }

  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`} style={myStyle}>
  <div className="container-fluid" style={myStyle}> 
    <a className="navbar-brand" href="/" style={brand}>{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={myStyle}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={myStyle}>
        <li className="nav-item" style={myStyle}>
          <a className="nav-link active" aria-current="page" href="/portfolio">Explore</a>
        </li>
       
        <li className="nav-item" style={myStyle}>
          <a className="nav-link active" aria-current="page" href="/">Learn</a>
        </li>

        <li className="nav-item" style={myStyle}>
          <a className="nav-link active" aria-current="page" href="/">Business</a>
        </li>

        <li className="nav-item" style={myStyle}>
          <a className="nav-link active" aria-current="page" href="/">Developer</a>
        </li>

        <li className="nav-item" style={myStyle}>
          <a className="nav-link active" aria-current="page" href="/">Company</a>
        </li>

        <div className="sign-in">
          <button class="btn btn-light me-md-2" type="submit">Sign in</button>
          <button class="btn btn-primary" type="submit">Get started</button>
        </div>
        
      </ul>
      {/* <form className="d-flex " role="search">
        <input className="form-control " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}

      {/* <div className="form-check form-switch">
  <input className="form-check-input mx-3" type="checkbox" role="switch" id="flexSwitchCheckDefault"   onClick={props.onSlide}/>
  <label className={`form-check-label text-${props.mode==="dark"?"light":"dark"}`} htmlFor="flexSwitchCheckDefault" style={myStyle}>{props.mode==='dark'?"Enable Light Mode":"Enable Dark Mode"}</label>
</div> */}
    </div>
  </div>

  
</nav>
  )
}

export default Navbar


{/* <nav className='navbar navbar-expand-lg'>
<div className='container-fluid'>
  <div className='collapse navbar-collapse'>
    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
      <li className='nav-item'>
        <a className='nav-link active' href="/">Home</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link active' href="/">About</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link active' href="/">Services</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link active' href="/">Contact Us</a>
      </li>
    </ul>
  </div>
</div>
</nav> 

 <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>

*/}