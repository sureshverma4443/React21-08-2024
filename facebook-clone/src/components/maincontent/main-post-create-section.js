import { MdPhotoLibrary } from "react-icons/md";
import { FaUserTag } from "react-icons/fa";
import { MdLocalActivity } from "react-icons/md";

import './main-post-create-section.scss'



const Midsection = ()=>{
    return (
        <div className="mid_div">
            <div className="input">
                <img src="https://scontent.fjai2-6.fna.fbcdn.net/v/t39.30808-1/279583217_3103072810021763_5516429117844340829_n.jpg?stp=dst-jpg_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=bvIzDp5nDBMQ7kNvgG2s9up&_nc_ht=scontent.fjai2-6.fna&_nc_gid=AaEkS10o2vRqayj8putfIIp&oh=00_AYDmEY22Zoqv75YOSuKNPAFwjdiWOkM3ABJ-fCPkNyGMxg&oe=66E47A78" alt="kkk" />
                <input type="search" placeholder="What's Your On Mind. Virat ?"/>
            </div>
            
            <div className="linetext">
                <div className="photo">
                <MdPhotoLibrary className="photo_lib"/>
                <p>Photo/Video</p>
                </div>

                <div className="tag">
                <FaUserTag className="photo_lib1"/>
                <p>Tag Friends</p>

                </div>

                <div className="feeling">
                <MdLocalActivity className="photo_lib2"/>
                <p>Feeling/Activity</p>

                </div>


            </div>

        </div>

    
        
    )
}


export default Midsection;