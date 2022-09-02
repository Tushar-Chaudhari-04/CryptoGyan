import React from 'react'
import '../css/Coin.css'

const Coin = ({image,symbol,name,price,volume,pricechange,marketcap}) => {
    return (
        <tr className="coin-container">
            <div className="coin-row">
                <div className="coin">
                    <td><img src={image} alt="crypto" /></td>
                    <td><h1>{name}</h1></td>
                    <td><p className="coin-symbol">{symbol}</p></td>
                </div>
                <div className="coin-data">
                    <td><p className="coin-price">₹{price}</p></td>
                    {/* <p className="coin-volume">Rs.{volume}</p> */}
                    {pricechange<0 ? (
                        <td><p className="coin-percent red">{pricechange.toFixed(2)}%</p></td>
                    ):(
                        <td><p className="coin-percent green">{pricechange.toFixed(2)}%</p></td>
                    )
                }
                <td><p className="coin-marketcap">{marketcap}</p></td>
                <td><button type="submit" className="btn btn-success mx-5">Buy</button></td>
                </div>
                
            </div>
        </tr>
    )
}

export default Coin