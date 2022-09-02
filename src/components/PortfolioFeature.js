import React from 'react'

const PortfolioFeature = (props) => {
  return (
    <div className="features">
        <img className="feature-img" src={props.img} alt="feature-img"/>
        <div className="feature-data">
                <p className="feature-title">{props.title}</p>
                <p className="feature-info">{props.info}</p>
        </div>
    </div>
  )
}

export default PortfolioFeature