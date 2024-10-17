import "./AllNotofication.scss"
import { GrVideo } from "react-icons/gr";
import { IoIosMore } from "react-icons/io";


const allnotificationdata=[{
    id :"1",
    icon:<GrVideo />,
    image:"https://pbs.twimg.com/profile_images/1451465822371676162/Yu7XLGAC_400x400.jpg",
    accountname:"Zee News",
    Content:"8 Ka Attack LIVE : उप ‘चुनाव’ का शंखनाद Rajasthan की 7 विधानसभा सीटों पर उपचुनाव | Rajasthan By Election 2024"
},
{
    id :"2",
    icon:<GrVideo />,
    image:"https://pbs.twimg.com/profile_images/1711277033639268352/hxSct2O1_400x400.jpg",
    accountname:"Government of Rajasthan",
    Content:" जल संचय-जन भागीदारी से जन आंदोलन कार्यक्रम, सूरत, गुजरात "
},
{id :"3",
icon:<GrVideo />,
image:"https://pbs.twimg.com/profile_images/1451465822371676162/Yu7XLGAC_400x400.jpg",
accountname:"Zee News",
Content:"8 Ka Attack LIVE : उप ‘चुनाव’ का शंखनाद Rajasthan की 7 विधानसभा सीटों पर उपचुनाव | Rajasthan By Election 2024"
},
{id :"4",
icon:<GrVideo />,
image:"https://pbs.twimg.com/profile_images/1451465822371676162/Yu7XLGAC_400x400.jpg",
accountname:"Zee News",
Content:"8 Ka Attack LIVE : उप ‘चुनाव’ का शंखनाद Rajasthan की 7 विधानसभा सीटों पर उपचुनाव | Rajasthan By Election 2024"
},
{
    id :"2",
    icon:<GrVideo />,
    image:"https://pbs.twimg.com/profile_images/1711277033639268352/hxSct2O1_400x400.jpg",
    accountname:"Government of Rajasthan",
    Content:" जल संचय-जन भागीदारी से जन आंदोलन कार्यक्रम, सूरत, गुजरात "
},
]



const AllNotification=()=>{
    return(
        <div className="AllNotificationcontainer">
             {allnotificationdata.map((el)=>{
               return(
                <div className="AllNotificationitem">
                <div className="AllNotificationitemicon">{el.icon}</div>
                <div>
                    <div className="AllNotificationitemimage"><img src={el.img}></img></div>
                    <div className="AllNotificationitemaccount"><h6>{el.accountname}{el.Content}</h6></div>
                </div>
                <div className="AllNotificationitemmore"><IoIosMore /></div>
                </div>
               )
             })}
            

        </div>
    )
}

export default AllNotification