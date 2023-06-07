import React from 'react'
import "./hero.css";
import Header from '../Header/Header';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


  

const Hero = () => {
  return (
    <div className='hero'>
      
      <div className="left-h">

        <Header />

        <div className="best">
          <div  > </div>
          <span> The Best Beauty in the Word </span>
        </div>

        <div className="hero-text">

          <div className="">
            <span className='stroke-text'> Hello </span>
            <span> Beauties </span>
          </div>

          <div>
            <span>
              Ideal Beauty
            </span>
          </div>

          <div>
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </span>
          </div>

        </div>

        {/* figers start */}

        <div className="figers">
          <div >
            <span>+600</span>
            <span>make up Products</span>
          </div>
          <div >
            <span>+180</span>
            <span>Learning Make Up programes</span>
          </div>

        </div>
            
        {/* hero btns */}
        
        <div className='hero-btn'>
          <button className='btn'> Subsecribe </button>
          <button className='btn'> Learn More</button>
        </div>





       </div>

      <div className="right-h" >

        <button className='btn'>join now</button>
        <i className='fa fab-heart'></i>
        {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
         <FontAwesomeIcon icon="check-square" />
         <FontAwesomeIcon icon="coffee" />  

        <span>rate of beauty</span>

      </div>

      

    </div>
  )
}

export default Hero;
