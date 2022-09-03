import React from 'react'

const PortfolioFeature = (props) => {
  return (
    <div className="features">
        <img className="feature-img" src={props.img} alt="feature-img"/>
        <div className="feature-data">
                <h4 className="feature-title">{props.title}</h4>
                <br/>
                <span className="feature-info">{props.info}</span>
        </div>
    </div>
  )
}

export default PortfolioFeature