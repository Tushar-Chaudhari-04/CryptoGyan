import React from 'react'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <div className='container-fluid'>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' href="#">Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href="#">About</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href="#">Services</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar