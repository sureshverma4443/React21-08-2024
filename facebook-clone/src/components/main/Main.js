import './Main.scss'

import Maincontent from '../maincontent/Maincontent'
import Mainright from '../mainright/Mainright'
import Midsection from '../maincontent/main-post-create-section'
import Mainpost from './mainpost/Mainpost'




const Main =()=>{
    return(    
        
    <div className='main'>       
         <Maincontent />
           <Midsection/>
           <Mainpost/>
    </div>
    )
     
}



export default Main;