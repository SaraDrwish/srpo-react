import React from 'react'
import { useEffect , useState } from 'react';
import "./hero.css";
import Header from '../Header/Header';
import heroimg from "../../assets/img/beu.jpg"
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';


const Hero = () => {

  const mobile = window.innerWidth <= 768 ? true : false;

  const transition = { type: "spring", duration: 3 }
  

  const [backBtn, setBackBtn] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackBtn(true)
      } else {
        setBackBtn(false)
      }
      } )
  
  } , [])
  
  const scrollUp =()=> window.scrollTo({
    top: 0,
    behavior:"smooth"
  })
// scrollBtn =


  return (
    <div className='hero'>

      <div className="blur hero-blur"></div>
      
      <div className="left-h">

        <Header />

        <div className="best">
          {/* <div  > </div> */}
           <motion.div  
            initial={{ left: mobile? "95px" :"180px" }}
            whileInView={{ left: "8px" }}
            transition={ {...transition , type:"tween"}} >
          </motion.div>

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
            <span>
              <NumberCounter end={100} start={22} delay="3" preFix="+" />
            </span>
            <span>make up Products</span>
          </div>
          <div >
            {/* <span>+180</span> */}
            <span>  <NumberCounter end={256} start={100} delay="3" preFix="+" /> </span>
            <span>Learning Make Up programes</span>
          </div>

        </div> {/**end figers */}
            
        {/* hero btns */}
        
        <div className='hero-btn'>
          <button className='btn'> Subsecribe </button>
          <button className='btn'> Learn More</button>
        </div>


       </div> {/**end left h */}

      <div className="right-h" >

        <button className='btn'>join now</button>
        {/* <i className='fa fab-heart'></i> */}
        {/* <FontAwesomeIcon icon={["fal", "coffee"]} /> */}
         {/* <FontAwesomeIcon icon="check-square" />
         <FontAwesomeIcon icon="coffee" />   */}
{/* RATE OF BEAUTY */}
        {/* <span> beauty</span> */}
        <motion.span
           initial={{ right: "6rem" }}
            whileInView={{ right: "8rem" }}
            transition={ {...transition , type:"tween"}} 
        
          className='hero-circ-span'
        
        >
          {/* beauty */}
        
        </motion.span>

        
      <div className="imghero">
        {/* <img src={heroimg} alt="heroimg"  className='heroimg'/> */}
      </div>

      </div> {/**end right sec */}

      {/* onClick={scrollBtn>=1200? "show" : " " }  */}
      
      { backBtn &&
      
        <svg  onClick={scrollUp} className='btnDown' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM135.1 217.4c-4.5 4.2-7.1 10.1-7.1 16.3c0 12.3 10 22.3 22.3 22.3H208v96c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V256h57.7c12.3 0 22.3-10 22.3-22.3c0-6.2-2.6-12.1-7.1-16.3L269.8 117.5c-3.8-3.5-8.7-5.5-13.8-5.5s-10.1 2-13.8 5.5L135.1 217.4z" />
       </svg>

      }
      

      

    </div> /**end hero */ 

  )
}

export default Hero;
