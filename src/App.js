// import logo from './logo.svg';
import './App.css';
import CryptoData from './pages/CryptoData';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CryptoData/>
      <Footer/>
    </div>
  );
}

export default App;
