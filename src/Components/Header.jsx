import '../App.css'
import { LOGO_URL } from  '../utils/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = ()=>{

  const [btnState,setBtnState] = useState('Login');
    return(
      <div className='header'>
        <div className='logo-container'>
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className='nav-items'>
          <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
              </li>
            <li>
            <Link to="/contact">Contact Us</Link>
            </li>
            <li>Cart</li>
            <button className='login-btn' onClick={()=>{
            btnState== 'Login' ? setBtnState("Logout") : setBtnState("Login");
            }}>{btnState}</button>
          </ul>
        </div>
  
      </div>
    )
  }

  export default Header;