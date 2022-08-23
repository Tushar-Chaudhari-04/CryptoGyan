import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios'
import Coin from './Coin';


const Home = () => {
  const [coins,setCoins]=useState([]);
  const [search,setSearch]=useState("");
  
  useEffect(()=>{
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res=>{
        console.log(res.data);
        setCoins(res.data);
    }
    ).catch(
        error=>{
            console.log(error);
        }
    )
  },[]);

  return (
    <div className='coin-app'>
        <div className='coin-search'>
            <form>
                <input type="text" placeholder='Enter Crypto Name'/>
            </form>
        </div>

            {coins.map(coin=>{
                return (
                    <div>
                    <Coin 
                        key={coin.id}
                        image={coin.image}
                        symbol={coin.symbol}
                        name={coin.name}
                        price={coin.current_price}
                        volume={coin.total_volume}
                        pricechange={coin.price_change_24h}
                        marketcap={coin.market_cap}
                    />
                    <br></br>
                    </div>
                )})
            };
    </div>
  )
}

export default Home



















// function App() {
//   const [coins,setCoins] = useState([])
//   const [search,setSearch] = useState('')
//   useEffect(() => {
//     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
//     .then(res=>{
//        setCoins(res.data)
//        console.log(res.data)
//     }).catch(error=>console.log(error))
//   }, [])
//   const handleChange = e =>{
//     setSearch(e.target.value)
//   }
//   const filteredCoins = coins.filter(coin=>
//     coin.name.toLowerCase().includes(search.toLowerCase())
//     )
//   return (
//     <div className="coin-app">
//       <div className="coin-search">
//         {/* <h1 className="coin-text">Search your desired coin</h1> */}
//         <form action="">
//           <input type="text" className="coin-input" placeholder="Provide the coin name" onChange={handleChange}/>

//         </form>

//       </div>
//       {filteredCoins.map(coin=>{
//         return(
//           <Coin 
//           key={coin.id} 
//           name={coin.name} 
//           image={coin.image} 
//           symbol={coin.symbol}
//           marketcap={coin.market_cap}
//           price={coin.current_price}
//           pricechange={coin.price_change_percentage_24h}
//          volume={coin.total_volume}
//           />
//         );
//       })}


//     </div>
//   );
// }

//export default App;