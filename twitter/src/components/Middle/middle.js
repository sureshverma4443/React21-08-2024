import './middle.scss'
import Navbuttons from './Navbuttons/navButtons'
import Newpost from './Newposts/newposts'
import Posts from './Posts/posts'


const Middle =()=>{
    return(
        
        <div className="Middle">
            <Navbuttons/>
            <Newpost/>
            <Posts/>



        </div>
    )
}

export default Middle