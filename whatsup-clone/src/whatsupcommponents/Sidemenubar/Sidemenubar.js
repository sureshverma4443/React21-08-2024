import './Sidemenubar.css'
import { AiTwotoneMessage } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";
import { HiOutlineStatusOnline } from "react-icons/hi";
import { IoIosSearch } from "react-icons/io";
import { LuMessageSquarePlus } from "react-icons/lu";
import { MdOutlineGroups } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { SlOptionsVertical } from "react-icons/sl";


const chatcontact = {
    contacts:[{
        id:1,
        name:"Suresh",
        status:"online",
        image:"https://picsum.photos/200/300",
        message:"Hello, how are you?",
        time:"10:00 AM",
        },
        {
            id:2,
            name:"Mukesh",
            status:"offline",
            image:"https://pps.whatsapp.net/v/t61.24694-24/420474561_1440305299910829_7198873562190225004_n.jpg?ccb=11-4&oh=01_Q5AaIHbfZx3FIKsN4HASo6ETkoHyJf4DoqIQR4Sej6Am_AFW&oe=66E23F1F&_nc_sid=5e03e0&_nc_cat=110",
            message:"Hello, how are you?",
            time:"12:00 AM",
        },
        {
            id:3,
            name:"Sitaram",
            status:"online",
            image:"https://pps.whatsapp.net/v/t61.24694-24/442158830_448311394744142_8722731425926088784_n.jpg?ccb=11-4&oh=01_Q5AaINIOJgKYEqde1UgnfHIoKemlEyg6FQpZEDkWCIPcUhW8&oe=66E2AF3F&_nc_sid=5e03e0&_nc_cat=110",
            message:"Hello, how are you?",
            time:"10:00 AM",

        },
        {
            id:4,
            name:"Sohan",
            status:"online",
            image:"https://pps.whatsapp.net/v/t61.24694-24/445380714_380164061741682_5938289116210842685_n.jpg?ccb=11-4&oh=01_Q5AaIKg9ZKmYtjV_t2ZYy5EjMunh1lXwkqWFx_lLTEwowpXQ&oe=66E29F51&_nc_sid=5e03e0&_nc_cat=104",
            message:"Hello, how are you?",
            time:"10:00 AM",

        },
        {
            id:5,
            name:"Manoj",
            status:"online",
            image:"https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/414725898_450724871107729_7800877498851362272_n.jpg?ccb=11-4&oh=01_Q5AaII3Ilkgk0z87njQH99TXh_PsAoGSHPpGH9QBIYMO8Qb3&oe=66E29A29&_nc_sid=5e03e0&_nc_cat=105",
            message:"Hello, how are you?",
            time:"10:00 AM",

        },
        {
            id:6,
            name:"Suresh chatki",
            status:"online",
            image:"https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/421708843_813617650930504_7330324857764675399_n.jpg?ccb=11-4&oh=01_Q5AaIMz_Ru6rGzKngcASJbO8VhwtkEhHbHSOTfyubFPOp8jf&oe=66DE9D84&_nc_sid=5e03e0&_nc_cat=106",
            message:"Hello, how are you?",
            time:"10:00 AM",

        },
        {
            id:7,
            name:"Manish",
            status:"online",
            image:"https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/353200948_1400717373994591_740200217901489981_n.jpg?ccb=11-4&oh=01_Q5AaIMziMwe_GxXozG2i2tCEthhrCLfiS4Nc8tBSULPBKOMT&oe=66E2B374&_nc_sid=5e03e0&_nc_cat=108",
            message:"Hello, how are you?",
            time:"10:00 AM",
        },
        {
            id:8,
            name:"Ashok",
            status:"online",
            image:"https://media-del2-2.cdn.whatsapp.net/v/t61.24694-24/394193721_2754504514705525_5478513650949897062_n.jpg?ccb=11-4&oh=01_Q5AaIIp4vEDJRZB_eyMnf20YNuSPBvOd7Wi8dGxLluHUcfxu&oe=66E2A96E&_nc_sid=5e03e0&_nc_cat=102",
            message:"Hello, how are you?",
            time:"10:00 AM",

        },
        {
            id:9,
            name:"Mohit",
            status:"online",
            image:"https://pps.whatsapp.net/v/t61.24694-24/442158830_448311394744142_8722731425926088784_n.jpg?ccb=11-4&oh=01_Q5AaINIOJgKYEqde1UgnfHIoKemlEyg6FQpZEDkWCIPcUhW8&oe=66E2AF3F&_nc_sid=5e03e0&_nc_cat=110",
            message:"Hello, how are you?",
            time:"10:00 AM",
        },
    ]     
    }
   

    












const Sidemenubar = ()=>{
return(
    <div className="sidemenubar">
        <div className="profile">
            <div className='profileupicons'>
                <SiGooglemessages />
                <HiOutlineStatusOnline />
                <AiTwotoneMessage />
                <MdOutlineGroups/>
                <FaRegCircle/>
                

            </div>
            <div className='profiledownicons'>

            </div>

        </div>
        <div className='chat'>
            <div className='chatnav'>
                <h2>Chat</h2>
                <div>
                <LuMessageSquarePlus />
                <SlOptionsVertical/>
                </div>
               

            </div>
            <div className='searchsection'>
                <IoIosSearch />

                < input  type="text" placeholder="Search" />

            </div>
            <div className='all_Unread_Groups_Button'>
                <button>All</button>
                <button>Unread</button>
                <button>Groups</button>
            </div>
            <div className='chatcontact'>
                {chatcontact.contacts.map((el)=>{
                    return(
                <div className='contacts'>
                 <img src={el.image}/>
                 <div>
                <h3>{el.name}</h3>
                <p>{el.message}</p>
                </div>
                <span>{el.time}</span>
                </div>
           )

                })}
            </div>
        </div>
    </div>
)
}



export default Sidemenubar