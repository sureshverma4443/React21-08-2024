import './Sidebar.scss';

import  LinkList from '../../common/linklist/Linklist'
import { FaFacebookMessenger, FaUserFriends } from "react-icons/fa";
import { RiMemoriesFill, RiRefundFill } from 'react-icons/ri';
import { IoLogoGameControllerB, IoMdSave } from 'react-icons/io';
import { MdGroups2, MdLocalActivity, MdOndemandVideo, MdPayment } from 'react-icons/md';
import { LuBookMarked } from 'react-icons/lu';
import { FcFeedIn } from 'react-icons/fc';
import { BsFillCalendar2EventFill } from 'react-icons/bs';
import { SiCodeclimate, SiGooglecampaignmanager360, SiPowerpages, SiYoutubekids } from 'react-icons/si';
import { CgGames } from 'react-icons/cg';



let sidebardata = {
    Pages: [
      {
        key: "profile",
        label: "Profile",
        image:"https://scontent.fjai2-6.fna.fbcdn.net/v/t39.30808-1/279583217_3103072810021763_5516429117844340829_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=bvIzDp5nDBMQ7kNvgG2s9up&_nc_ht=scontent.fjai2-6.fna&_nc_gid=AaEkS10o2vRqayj8putfIIp&oh=00_AYDmEY22Zoqv75YOSuKNPAFwjdiWOkM3ABJ-fCPkNyGMxg&oe=66E47A78",
        type:"img"

      },
      {
        key: "friends",
        label: "Friends",
        icon:<FaUserFriends />,
        type:"icon"
        
      },
      {
        key: "momories",
        label: "Momories",
        icon:<RiMemoriesFill />,
        type:"icon"
      },
      {
        key: "saved",
        label: "Saved",
        icon:<IoMdSave />,
        type:"icon"
      },
      {
        key: "groups",
        label: "Groups",
         icon:<MdGroups2 />,
        type:"icon"
      },
      {
        key: "video",
        label: "Video",
        icon:<MdOndemandVideo />,
        type:"icon"
      },
      
      {
        key: "marketplace",
        label: "Marketplace",
        icon:<LuBookMarked />,
        type:"icon"
      },
      {
        key: "feeds",
        label: "Feeds",
         icon:<FcFeedIn />,
        type:"icon"
      },
      {
        key: "events",
        label: "Events",
        icon:<BsFillCalendar2EventFill />,
        type:"icon"
      },
      {
        key: "adsmanager",
        label: "Ads-Manager",
         icon:<SiGooglecampaignmanager360 />,
        type:"icon"
      },
      {
        key: "fundraisers",
        label: "Fundraisers",
        icon:<RiRefundFill />,
        type:"icon"
      },
      {
        key: "climatesciencecenter",
        label: "Climate-Science-Center",
        icon:<SiCodeclimate/>,
        type:"icon"

      },
      {
        key: "facebookpay",
        label: "Facebookpay",
         icon:<MdPayment />,
        type:"icon"
      },
      {
        key: "gamingvideo",
        label: "Gaming-video",
        icon:<IoLogoGameControllerB />,
        type:"icon"
        
      },
      {
        key: "messenger",
        label: "Messenger",
        icon:<FaFacebookMessenger />,
        type:"icon"
        
      },
      {
        key: "messengerkids",
        label: "Messenger-kids",
         icon:<SiYoutubekids />,
        type:"icon"
      },
      {
        key: "pages",
        label: "Pages",
         icon:<SiPowerpages />,
        type:"icon"
      },
      {
        key: "playgames",
        label: "Play-games",
        icon:<CgGames />,
        type:"icon"
      },
      {
        key: "recent ad activity",
        label: "Recent-ad-activity",
        icon:<MdLocalActivity />,
        type:"icon"
      },   

    ],
  };
 
 



const Sidebar =()=>{
    return(
        <div className="sidebar">
        
           
         <LinkList linkArr={sidebardata.Pages}  containerclass={"btn-container"}  linkClass="button"/>   
        </div>
    )
}


export default Sidebar