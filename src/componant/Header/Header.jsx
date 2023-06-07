import React from 'react';
import "./header.css";
import sa from "../../assets/img/sa.png";

const Header = () => {

  return (
    <div className = "headerr" > 

      <img src={sa} alt="1" className='logo' />
      
      <ul className='hreader-menu'>
        <li>Home</li>
        <li>Why Us </li>
        <li>Plans</li>
        <li>Testemonias</li>
        <li>Contact</li>
      </ul>

    </div> 

  )
}

export default Header;

 