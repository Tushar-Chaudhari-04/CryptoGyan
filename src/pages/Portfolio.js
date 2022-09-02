import React from 'react';
import WebMobilePortfolio from "../images/portfolio.PNG";
import  '../css/Portfolio.css';
import PortfolioFeature from '../components/PortfolioFeature';
import featureImg from "../images/manage-portfolio.PNG";
import vaultImg from "../images/vault-portfolio.PNG";
import mobileIconImg from "../images/mobile-portfolio.PNG";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
        <h4 className="heading">Create your cryptocurrency portfolio today</h4>
        <p className="para1">Coinbase has a variety of features that make it the best place to start trading</p>
        <div>
          <div className="portfolio-features">
          <PortfolioFeature img={featureImg}
            title="Manage your portfolio"
            info="Buy and sell popular digital currencies, keep track of them in the one place."
          />

          <PortfolioFeature img={vaultImg}
            title="Vault protection"
            info="For added security, store your funds in a vault with time delayed withdrawals."
          />

          <PortfolioFeature img={mobileIconImg}
            title="Mobile apps"
            info="Stay on top of the markets with the Coinbase app for Android or iOS."
          />
          </div>
          <img className="portfolio-img" src={WebMobilePortfolio} alt="WebMobileView"/>
        </div>
    </div>
  )
}

export default Portfolio