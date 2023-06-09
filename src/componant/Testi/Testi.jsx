import React, { useState } from 'react'
import "./tsti.css";
import { TestiData } from "../data/TestiData"
import { motion } from 'framer-motion';


function Testi() {


const [selected, setSelected] = useState(0);
const testiLen = TestiData.length;
const transition = {type:"spring" , duration:3}

  return (
      <div className="testi">
          
          <div className="left-tsti">
              <span>Testimonials</span>
              <span className='stroke-text'>What they </span>
              <span>about us</span>
              <motion.span
                  
                 key={selected}
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ transition, duration: 2 }}
                  exit={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  
              >
                  {TestiData[selected].review}
              </motion.span>
              <span>
                  <span style={{ color: "var( --main-color-og)" }}>{TestiData[selected].name} </span>
                   - {TestiData[selected].status}
              </span>

          </div>

          <div className="right-testi">
              <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ transition, duration: 2 }}
                  whileInView={{opacity:1 ,x:0} }
              ></motion.div>


              {/* <div></div> */}

              <motion.div
                 initial={{ opacity: 0, x: 100 }}
                  transition={{ transition, duration: 2 }}
                  whileInView={{opacity:1 ,x:0} }
              
              ></motion.div>

              <motion.img
                  
                  key={selected}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ transition, duration: 2 }}
                  exit={{ opacity: 0, x: -100 }}
                  whileInView={{opacity:1 ,x:0} }
                  
                  src={TestiData[selected].img} alt="tstimg" />

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
