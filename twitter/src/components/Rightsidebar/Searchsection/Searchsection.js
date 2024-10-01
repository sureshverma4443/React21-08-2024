 import { CiSearch } from "react-icons/ci"
import "./Searchsection.scss"

 const Searchsection =()=>{
    return(
        <div className="Searchsection">
             <span><CiSearch /></span>  <input placeholder="Search"></input>

        </div>
    )
 }

 export default Searchsection