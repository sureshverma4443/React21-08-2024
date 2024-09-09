import { Link } from "react-router-dom";

const LinkList=({linkArr=[],containerclass="",linkClass=""})=>{
    return(
        <div className={containerclass}>
            {linkArr.map((el)=>{
                return(
                    el.type==="img" ?(
                        <Link to={`/${el.key}`}key={el.key} className={linkClass}><img src={el.image}></img>{el.label}</Link>
    
                ):el.type==="icon"?(
                        <Link to={`/${el.key}`} className={linkClass}><div className="icon">{el.icon}</div>{el.label}</Link>
             ):null
         
                    
                )
            })}
        </div>
    )
}



export default LinkList