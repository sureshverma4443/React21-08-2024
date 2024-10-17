import FollowPosts from "../FollowPosts/followposts"
import Navbuttons from "../Middle/Navbuttons/navButtons"
import Newpost from "../Middle/Newposts/newposts"






 const Following=()=>{
    return(
        <div className="following">    
           <div><Navbuttons /> 
           <Newpost />
           <FollowPosts /></div>

        </div>
    )
 }


 export default Following