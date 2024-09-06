import './Sidebar.scss';

import  LinkList from '../../common/linklist/Linklist'



let sidebardata = {
    Pages: [
      {
        key: "profile",
        label: "Profile",
      },
      {
        key: "friends",
        label: "Friends",
      },
      {
        key: "momories",
        label: "Momories",
      },
      {
        key: "saved",
        label: "Saved",
      },
      {
        key: "groups",
        label: "Groups",
      },
      {
        key: "video",
        label: "Video",
      },
      {
        key: "marketplace",
        label: "Marketplace",
      },
      {
        key: "feeds",
        label: "Feeds",
      },
      {
        key: "events",
        label: "Events",
      },
      {
        key: "adsmanager",
        label: "Ads-Manager",
      },
      {
        key: "fundraisers",
        label: "Fundraisers",
      },
      {
        key: "climatesciencecenter",
        label: "Climate-Science-Center",
      },
      {
        key: "facebookpay",
        label: "Facebookpay",
      },
      {
        key: "gamingvideo",
        label: "Gaming-video",
      },
      {
        key: "messenger",
        label: "Messenger",
      },
      {
        key: "messengerkids",
        label: "Messenger-kids",
      },
      {
        key: "pages",
        label: "Pages",
      },
      {
        key: "playgames",
        label: "Play-games",
      },
      {
        key: "recent ad activity",
        label: "Recent-ad-activity",
      }

    ],
  };
 
 



const Sidebar =()=>{
    return(
        <div className="sidebar">
           
         <LinkList linkArr={sidebardata.Pages} containerclass={"btn-container"}  linkClass="button"/>
                
            
        </div>
    )
}


export default Sidebar