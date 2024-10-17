 import { CiSearch } from "react-icons/ci"
import "./Searchsection.scss"

 const Searchsection =()=>{
    return(
        <div className="Searchsection">
             <div className="Searchsectioninput"><span><CiSearch /></span>  <input placeholder="Search"></input></div>

        </div>
    )
 }

 export default Searchsection