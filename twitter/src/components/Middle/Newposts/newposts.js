import { CiImageOn } from 'react-icons/ci'
import { HiOutlineGif } from "react-icons/hi2";
import { FaPoll } from "react-icons/fa";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";
import './newposts.scss'



const Newpost=()=>{
    return(
        <div className='newposts' >
            <div className="newpost"><div className="newpostimage"><img src={"https://pbs.twimg.com/media/GXwa-VfXIAAbRgz?format=jpg&name=small"}></img></div>
            <div className="newpostfeeds">
            <div className="newpostfeedsinput"><input type="text" placeholder="What is happpening?!"/></div>
            <div className="newpostfeedsiconspost">
            <div className="newpostfeedsicons">
                <CiImageOn />
                <HiOutlineGif />
                <FaPoll />
                <BsEmojiSmileUpsideDown />
                <RiCalendarScheduleLine />
                <FiMapPin />
            </div>
            <div className="newpostfeedspostbutton"><button>Post</button></div>
            </div>
            </div>
            </div>
            <div className='postnotificaton'><p>show 65 posts</p></div>
        </div>
        
    )
}

export default Newpost