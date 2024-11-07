import "./WrapperPanel.scss"
import React, { Children } from 'react'; 
import { Panel } from 'primereact/panel';
import { Button } from "primereact/button";
import { RxCross2 } from "react-icons/rx";


const WrapperPanel =({title=null, btnlabel,onClickCb,children })=>{
    const _header = <div className="d-flex align-item-center justify-content-between">
        <h6 m-0>{title}</h6>
        {btnlabel? <Button label={btnlabel} onClick={ onClickCb} ></Button> : (<h3 onClick={onClickCb}><RxCross2/></h3>)}
       
    </div>
    


    return( 
        <div className="Panel_container">
        <Panel header={_header}>           
              {children}         
        </Panel>
        </div>
    )

}


export default WrapperPanel





