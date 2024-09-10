import './Main.scss'

import Maincontent from '../maincontent/Maincontent'
import Mainright from '../mainright/Mainright'
import Midsection from '../maincontent/main-post-create-section'
import Mainpost from './mainpost/Mainpost'




const Main =()=>{
    return(    
    <div className='main'>       
       <div> <Maincontent />
           <Midsection/>
           <Mainpost/>
           
           </div>
           
       <div><Mainright/> 
       
       </div>
        
        



    </div>
    )
     
}



export default Main;