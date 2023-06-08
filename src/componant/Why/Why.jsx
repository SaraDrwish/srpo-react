import React from 'react'
import "./why.css";
import pic1 from "../../assets/img/b1.jpg";
import pic2 from "../../assets/img/b2.jpg";
import pic3 from "../../assets/img/b3.webp";
import pic4 from "../../assets/img/b6.webp";
import check from "../../assets/img/check.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rea from "../../assets/img/R (1).png"
import gt from "../../assets/img/R.png"



function Why() {
  return (


      <div className="why" id='why'>
    
          <div className="left-why">

                  <img src= {pic1} alt="1" />
                  <img src={pic2}  alt="2" />
                  <img src= {pic3}  alt="3" />
                  <img src={pic4} alt="4" />
          
                </div>
                

      <div className="right-why">
        <span > Reasonse Why you should choose us ??</span>
        <div className='whytitleSpan'>
            <span className='stroke-text' > Why</span>
            <span> choose us ??</span>
        </div>
       

        <div className="list">

          <ul>    
            <FontAwesomeIcon icon="far fa-check-circle" />
            <li>
              <span>
                <img src={check} alt="check" />
              </span>
              <span>becausr We are much cuabrative </span>
            </li>
                <li> <img src={check} alt="check" />  we are very adubtid</li>
                <li> <img src={check} alt="check" /> we are the most bouerful </li>
          </ul>
          
        </div>
        
        <span style={{color: "var( --sec-color-drb)" }}>our partners</span>
        <div className="partn">
          <img src={rea} alt="" />
          <img src={gt} alt="" />
        </div>
    
      </div>
                
      
      
      </div>
          
      
  )
}

export default Why
