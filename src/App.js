// import logo from './logo.svg';
import './App.css';
import CryptoData from './pages/CryptoData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar title="CryptoGyan"/>
      <Home/>
      {/* <CryptoData/> */}
      <Footer/>
    </div>
  );
}

export default App;
