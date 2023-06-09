import React, { useState } from 'react'
import "./tsti.css";
import { TestiData } from "../data/TestiData"


function Testi() {


const [selected, setSelected] = useState(0);
const testiLen = TestiData.length;


  return (
      <div className="testi">
          
          <div className="left-tsti">
              <span>Testimonials</span>
              <span className='stroke-text'>What they </span>
              <span>about us</span>
              <span>
                  {TestiData[selected].review}
              </span>
              <span>
                  <span style={{ color: "var( --main-color-og)" }}>{TestiData[selected].name} </span>
                   - {TestiData[selected].status}
              </span>

          </div>

          <div className="right-testi">
              <div></div>
              <div></div>
              <img src={TestiData[selected].img} alt="tstimg" />

              <div className="arros">
                  
                  <svg
                      
                      onClick={() => {
                      selected === 0 ? setSelected( testiLen - 1) : setSelected( (prv) => prv-1)
                        } }
                  
                      xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                  </svg>

                  <svg
                      
                      onClick={() => {
                          selected === testiLen - 1 ? setSelected(0) :  setSelected( (prv) => prv+1)
                               } }
                  
                      xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>

              </div> {/**end arros */}

          </div> {/**end right-testi */}

      </div> /**end testi */
      
  )
}

export default Testi
