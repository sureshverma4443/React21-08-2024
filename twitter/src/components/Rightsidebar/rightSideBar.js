import './rightSideBar.scss'
import Followingsection from './Followingsection/Followingsection'
import Searchsection from './Searchsection/Searchsection'
import Subscribesection from './Subscribesection/Subscribesection'
import Trendingsection from './Trendingsection/Trendingsection'


const RightSideBar=()=>{
    return(
        <div className='Rightsidebar'>
            <Searchsection/>
            <Subscribesection/>
            <Trendingsection/>
            <Followingsection/>



        </div>
    )
}

export default RightSideBar