import {React , useState} from 'react';
import "./header.css";
import sa from "../../assets/img/sa.png";
import { Link } from 'react-scroll';

const Header = () => {

  const mobile = window.innerWidth <= 768 ? true : false 
  const [MenueOpen, setMenueOpen] = useState(false) 



  return (
    <div className="headerr" > 
      
      <img src={sa} alt="1" className='logo' />


      {(MenueOpen === false && mobile === true) ? 
        
        <svg
          onClick={ ()=> setMenueOpen(true) }
          
          xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
        :
        <ul className='hreader-menu'>
            <li  > <Link onClick={()=>setMenueOpen(false) } to="home" smooth={true} span={true} >Home</Link> </li>
            <li  > <Link onClick={()=>setMenueOpen(false) } to="why" smooth={true} > Why Us</Link>  </li>
            <li  > <Link onClick={()=>setMenueOpen(false) } to="plans" smooth={true} > Plans</Link>  </li>
            <li > <Link onClick={()=>setMenueOpen(false) }  to="testi"  smooth={true} > Testemonias</Link>  </li>
            <li  > <Link onClick={()=>setMenueOpen(false) } to="join" smooth={true} > Contact</Link>  </li>
         </ul>
      }
      
     
    </div> 

  )
}

export default Header;

 