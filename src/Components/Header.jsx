import '../App.css'
import { LOGO_URL } from  '../utils/constants';
import { useState } from 'react';
const Header = ()=>{

  const [btnState,setBtnState] = useState('Login');
    return(
      <div className='header'>
        <div className='logo-container'>
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className='nav-items'>
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT US</li>
            <li>CART</li>
            <button className='login-btn' onClick={()=>{
            btnState== 'Login' ? setBtnState("Logout") : setBtnState("Login");
            }}>{btnState}</button>
          </ul>
        </div>
  
      </div>
    )
  }

  export default Header;