import React from 'react'
import "./plans.css"
import {PlansData} from "../data/PlansData";
// import check from "../../assets/img/check.svg";
import RightArrow from "../../assets/img/RightArrow.svg"


function Plans() {
  return (
      <div className="plans-container">
          <div className="blur blur-plans-1"></div>
          <div className="blur blur-plans-2"></div>
          
              <div className="plans-headr" style={ {gap:"2rem"} }>
                  <span className='stroke-text'>ready to start</span>
                  <span> your jurny</span>
                  <span className='stroke-text' > now with us </span>
              </div> {/* end plans-headr */}
          
              <div className="plans">
                    
                    {PlansData.map( (pln , i) => (
                        
                        <div className="plansBox" key={i}>
                                {pln.icon}
                                <span> {pln.name} </span>
                                <span>  ${pln.price}</span>
                        
                                <div className="featuers">
                                    {pln.featuers.map((feat,i) => (
                                        <div className="feat">
                                            {pln.icon}
                                            {/* <img src={check} style={{ gap: "1.5rem" } } /> */}
                                            <span key={i}>{feat}</span>
                                        </div>  /** end feat */
                                    ))}
                                </div> {/**end featuers */}

                            <span className='iconsvgarro' > see more featuers
                                {/* <img src={RightArrow} alt="RightArrow" className='icon' /> */}
                                <svg className='iconsvgarro' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                            </span>
                            

                            <button>join now</button>

                        </div>  /** end plansBox */ 

                    ))}  

            </div> {/**end plans */}
              

        </div> /* end plans-container */
          
  )
}

export default Plans
