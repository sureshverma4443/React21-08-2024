import { AiFillHome } from 'react-icons/ai';
import './Navbar.scss'
import { CiSearch } from "react-icons/ci";
import { PiBookBookmarkBold, PiVideo } from 'react-icons/pi';
import { MdGroups2, MdNotifications } from 'react-icons/md';
import { FaGamepad } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { TbMessageReportFilled } from 'react-icons/tb';




const Navbar=()=> {
    return (
        <div className="navbar" >
            <div className="navsearch">
                <img src="https://freepnglogo.com/images/all_img/facebook-circle-logo-png.png"></img>
               <div>
                <span><CiSearch/></span>
               <input placeholder='Search Facebook'></input>
               </div>
            </div>
            <div className="navigation">
            <AiFillHome />
            <PiVideo />
            <PiBookBookmarkBold />
            <MdGroups2/>
            <FaGamepad />
                
            </div>
            <div className="navprofile">
            <CgMenuGridR />
            <TbMessageReportFilled />
            <MdNotifications />
            <img src='https://scontent.fudr2-2.fna.fbcdn.net/v/t39.30808-1/279583217_3103072810021763_5516429117844340829_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=Odn8gGx4miIQ7kNvgGLQv1r&_nc_ht=scontent.fudr2-2.fna&oh=00_AYAMPHjGmwdJVoJoZnd75MOhFpXPmQpMIKwlCBs2oX767Q&oe=66E085F8'></img>
                </div>          
                
         </div>
    )
}
export default Navbar