import '../style/Errorpage.css';
import { BiError } from "react-icons/bi";

const Errorpage = () => {
    return ( 
        <>
        <div className="mainErrorBox">
            <BiError  className="errorlogo" color = '#fe0505' size='20rem'/>
            <p>We can't find that page your looking for,</p>
            <p>Or may be your disconnected :(</p>
        </div>
        </>
     );
}
 
export default Errorpage;