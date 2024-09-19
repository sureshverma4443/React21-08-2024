import { BsHouseFill, BsTwitterX} from 'react-icons/bs'
import './leftSideBar.scss'
import { RiSearchLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaEnvelopeSquare } from "react-icons/fa";
import { BsSlashSquare } from "react-icons/bs";
import { HiOutlineBookmark } from "react-icons/hi";
import { RiGroupLine } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { MdOutlineVerified } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";




const twiter={
Twittermenu:[
    {id:1,  icon:<BsTwitterX/>},
    {id:2,name:'Home',   icon:<BsHouseFill/>},
    {id:3,name:'Explore', icon:<RiSearchLine/>},
    {id:4,name:'Notifications', icon:<IoNotificationsOutline/>},
    {id:5,name:'Messages', icon:<FaEnvelopeSquare />},
    {id:6,name:'Grok', icon:<BsSlashSquare />},    
    {id:7,name:'Bookmarks', icon:<HiOutlineBookmark />},
    {id:8,name:'Communities', icon:<RiGroupLine />},
    {id:9,name:'Premium', icon:<BsTwitterX/>},
    {id:10,name:'Verified Orgs', icon:<GoVerified />},
    {id:11,name:'Profile', icon:<CgProfile />},
    {id:12,name:'More', icon:<CgMoreO />},  

],
twiterprofile:[{
    id:1,
    name:'SURESH VERMA',
    image:"https://pbs.twimg.com/media/GXwa-VfXIAAbRgz?format=jpg&name=small",
    twitterid:"@SURESHV67477994",
    icon:<MdOutlineVerified />,
    menu:<BsThreeDots />

    
}]


}

const LeftSideBar =()=>{
    return (
        <div className='LeftSideBar'>
        {twiter.Twittermenu.map(el=>{
            return(
             <div key={el.id} className='twittermenu'>
            <h5>{el.icon}</h5>
            <h5>{el.name}</h5>
                </div>
            )
            

        })
        }
        <div className='twitermenubutton'><button>Post</button></div>


        <div className='profile'>
            {twiter.twiterprofile.map(el=>{
                return(
                    <div key={el.id} >
                       <img src={el.image}></img>
                       <div>
                        <h5>{el.name}</h5>
                        <h3>{el.twitterid}</h3>
                    </div>
                    <div>
                        <h5>{el.icon}</h5>
                        
                    </div>
                    </div>
                    

                )
            })}


        </div>
       
            


        </div>
    )
}

export default LeftSideBar