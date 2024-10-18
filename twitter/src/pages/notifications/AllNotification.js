import "./AllNotofication.scss"
import { GrVideo } from "react-icons/gr";
import { IoIosMore } from "react-icons/io";


const allnotificationdata=[{
    id :"1",
    icon:<GrVideo />,
    image:"data:image/jpeg;base64,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",
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