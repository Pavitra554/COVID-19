import '../style/Nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { RiVirusFill } from "react-icons/ri";
import { BsFillHouseFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";


const Nav = () => {
    const [N_on,setN_on] = useState(false);
    const [btncross,setbtncross] = useState(false);
    return (
        <>
        <div className="nav_block">
            <button onClick={()=>{setN_on(!N_on);setbtncross(!btncross)}} className="navbtn">
            <div className={btncross?"":"lines"}>
                </div>
                <div className={btncross?"barOn lines":"barOff lines"}>
                </div>
                <div className={btncross?"barOn1 lines":"barOff1 lines"}>
                </div>
            </button>
            <div className="logo">
                C<RiVirusFill 
                className = 'covid-icon' color='#fe1605'/>VID-19
            </div>
         </div>
        <nav className={N_on?"navON":"navOFF"}>
                <Link to='/' className='links' ><BsFillHouseFill color='#ffffff'/> <div>Home</div></Link>
                <Link to='/About' className='links' ><BsFillPersonFill color='#ffffff'/> <div>About</div></Link>
                <Link to= '/Developer' className='links' ><FaLaptopCode color='#ffffff'/><div>Developer</div></Link>
        </nav>
        </>
      );
}
 
export default Nav;