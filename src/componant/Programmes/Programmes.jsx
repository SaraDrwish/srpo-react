import React from 'react'
import "./Programmes.css"
import { ProgrammesData } from '../data/ProgrammesData';
import RightArrow from "../../assets/img/RightArrow.svg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import smil from "../../assets/img/smil.svg";
import beau from "../../assets/img/burea.svg";
    
    
function Programmes() {
  return (
      <div className='Programmes' id='programmes'>
          
          <div className="prog-header">
              <span className='stroke-text'>Explore</span>
              <span> Programes</span>
              <span className='stroke-text'>to be more breauty </span>
          </div>

          <div className="prog-catg">
              {ProgrammesData.map((pr) => (
                  <div className="catago">
                      {pr.imge}
                      <span>{ pr.heading}</span>
                      <span>{pr.details}</span>
                      <div className="join-nw">
                          <span className='btn'> join now </span>
                          {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
                          <img src={RightArrow}   alt="RightArrow"  className='icon'/>
                      </div>
                  </div>
                  

              ))}
              
          </div>


      
    </div>
  )
}

export default Programmes
