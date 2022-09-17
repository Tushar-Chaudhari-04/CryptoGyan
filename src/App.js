// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import CryptoData from './pages/CryptoData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import MiddlePage from './pages/MiddlePage'
import SignUp from "./pages/Signup"
import Signin from "./pages/Signin"
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Spinner from './components/Spinner';


function App() {
  const user=false;

  const [mode,setMode]=useState('light');

  const onSlide=()=>{
    mode==='light'?setMode('dark'):setMode('light');
  }
  return (
    <div className="App">
     <Router>
      <Routes>
            <Route exact path="/" element={<Home mode={mode} onSlide={onSlide}/>}/>
            <Route path="/register" element={user?<Navigate to="/"/>:<SignUp/>}/> 
            <Route path="/login" element={user?<Navigate to="/"/>:<Signin/>}/>
            <Route path="/spinner" element={<Spinner/>}/>
            {/* <Route path="/products/:category" element={</>}/>
            <Route path="/product/:id" element={<SpecificProduct/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/success" element={<Success/>}/> */}
     </Routes>
    </Router>
    {/* <CryptoData/> */}
    </div>
  );
}

export default App;
