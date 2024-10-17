import { Link } from "react-router-dom";

const LinkList=({linkArr=[],containerclass="",linkClass=""})=>{
    return(
        <div className={"btn-container"}>
            {linkArr.map((el)=><Link to={el.path} className={"linkClass"}><div><h5>{el.icon}</h5><h5>{el.name}</h5></div></Link>)}
        </div>
    )
}



export default LinkList