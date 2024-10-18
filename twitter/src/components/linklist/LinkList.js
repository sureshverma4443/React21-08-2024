import { Link, useLocation } from "react-router-dom";
import './LinkList.scss';



const LinkList=({linkArr=[],containerclass="",linkClass=""})=>{
    const location =useLocation();
   


    return(
        <div className={"btn-container"}>
            {linkArr.map((el)=><Link to={el.path} className={`btnlink ${location.pathname===el.path && 'active' }`}><div><p>{el.icon}</p><p>{el.name}</p></div></Link>

            )}

        </div>
    )
}



export default LinkList