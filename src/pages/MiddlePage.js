import React from 'react'
import "../css/MiddlePage.css"

import secureStorage from "../images/storage.PNG"
import bestPractice from "../images/bestPractice.PNG"
import industryPractice from "../images/industryPractice.PNG"
import account from "../images/account.PNG"
import bank from "../images/bank.PNG"
import buysell from "../images/b&s.PNG"

const MiddlePage = () => {
  return (
    <div className="middle">
        <h2 className="heading-data">The most trusted cryptocurrency platform</h2>
        <p className="middledata">Here are a few reasons why you should choose Coinbase</p>
        <div className="feature">
            <div className="feature-info1">
                <img src={secureStorage} />
                <h4>Secure Storage</h4>
                <p style={{fontSize:"20px",fontWeight:200}}>We store the vast majority of the digital assets in secure offline storage.</p>
                <a href="/">Learn more </a>
            </div>
            <div className="feature-info2">
                <img src={industryPractice} />
                <h4>Industry best practices</h4>
                <p style={{fontSize:"20px",fontWeight:200}}>Coinbase supports a variety of the most popular digital currencies.</p>
                <a href="/">Learn more </a>
            </div>
        </div>

        <div className="data">
            <table>
                <tr>
                    <th>₹44,00,000 Cr</th>
                    <th>100+</th>
                    <th>8.9+ Cr</th>
                </tr>
                <tr>
                    <td>Quarterly volume traded</td>
                    <td>Countries supported</td>
                    <td>Verified users</td>
                </tr>
            </table>
        </div>

        <div className="bottom-data">
            <h2 className="bottom-head">Get started in a few minutes</h2>
            <p className="bottom-info">Coinbase supports a variety of the most popular digital currencies.</p>
        </div>

        <div className="bottom-features">
            <div>
                <img src={account}/>
                <p>Create an Account</p>
            </div>

            <div>
                <img src={bank}/>
                <p>Link your bank account</p>
            </div>

            <div>
                <img src={buysell}/>
                <p>Start buying & selling</p>
            </div>
        </div>
    </div>
  )
}

export default MiddlePage

