import React from 'react'

const Header:React.FC = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
    <div className="container">
      <a className="navbar-brand" href="#"><img src="/assets/images/header/car.png" alt=""  className='car-logo'/></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbarr " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
            <a className="nav-link text-center " aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="#">Shop</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="#">About Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-center" href="#">Blog</a>
          </li>
         
          
        </ul>
        <div className="button-div">
        <button className='contact'><h6 className='text'>Contact US</h6></button>

        </div>
      </div>
    </div>

  </nav>
      <div className="linear"></div>

 
   </>
  )
}

export default Header