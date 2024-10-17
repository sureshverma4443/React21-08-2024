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
import LinkList from '../linklist/LinkList';




const twiter={
Twittermenu:[
    {id:1,  icon:<BsTwitterX/>},
    {id:2,path:"/Foryou",name:'Home',   icon:<BsHouseFill/>},
    {id:3,path:"/explore",name:'Explore', icon:<RiSearchLine/>},
    {id:4,path:"/notification",name:'Notifications', icon:<IoNotificationsOutline/>},
    {id:5,path:"/messages",name:'Messages', icon:<FaEnvelopeSquare />},
    {id:6,path:"/grok",name:'Grok', icon:<BsSlashSquare />},    
    {id:7,path:"/bookmark",name:'Bookmarks', icon:<HiOutlineBookmark />},
    {id:8,path:"/communities",name:'Communities', icon:<RiGroupLine />},
    {id:9,path:"/premium",name:'Premium', icon:<BsTwitterX/>},
    {id:10,path:"/verified_org",name:'Verified Orgs', icon:<GoVerified />},
    {id:11,path:"/profile",name:'Profile', icon:<CgProfile />},
    {id:12,path:"/more",name:'More', icon:<CgMoreO />},  

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
            <LinkList linkArr={twiter.Twittermenu}  containerclass={"btn-container"}  linkClass="button"/>
        
        <div className='twitermenubutton'><button>Post</button></div>


        <div className='profile'>
            {twiter.twiterprofile.map(el=>{
                return(
                    <div key={el.id} className='profileitems' >
                      <div className='item'>
                      <img src={el.image}></img>
                       <div  className='profileitemsname'>
                        <div className='profilenamebluetik'>
                        <h6>{el.name}</h6>
                        <h5>{el.icon}</h5>
                        </div> 
                        <div>
                    <p>{el.twitterid}</p>                        
                    </div>                      
                    </div>
                    
                    <div>{el.menu}</div></div> 
                    </div>
                    

                )
            })}


        </div>
       
            


        </div>
    )
}

export default LeftSideBar