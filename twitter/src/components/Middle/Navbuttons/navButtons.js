import { Link } from 'react-router-dom';
import './navButtons.scss'


const Navbuttons =()=>{
    return(
        <div className="navbuttons">
        <Link to="../../Foryou" ><button>For you</button></Link>
        <Link to="../../Following"><button>Following</button></Link>               
        </div>
        
    )
    
}



export default Navbuttons;