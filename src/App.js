// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import CryptoData from './pages/CryptoData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import MiddlePage from './pages/MiddlePage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,Routes
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');

  const onSlide=()=>{
    mode==='light'?setMode('dark'):setMode('light');
  }
  return (
    <div className="App">
      <Navbar title="CryptoGyan" mode={mode} onSlide={onSlide}/>
        <Home mode={mode} onSlide={onSlide}/>
         {/* <CryptoData/> */}
        <Portfolio />
        {/* <div className="space"></div> */}
        <MiddlePage/>
      <Footer/>
     
    </div>
    
  );
}

export default App;
