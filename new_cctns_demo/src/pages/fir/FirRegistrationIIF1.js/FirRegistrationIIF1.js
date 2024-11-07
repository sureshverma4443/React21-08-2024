import "./FirRegistrationIIF1.scss"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import WrapperPanel from "../../../components/common/wrapperPanel/WrapperPanel";
import { useState } from "react";
import React from 'react'; 
import { TabView, TabPanel } from 'primereact/tabview';
import FormFieldRenger from "../../../components/common/formFieldRender/FormFieldRender";

const columns = [
    { id:'fir no',
     field: 'fir no',
     header: 'FIR NO'},

    {
    id:'fir date',
    field:'fir date',
     header: 'FIRDATE'},

    {
    id:'complainter name',
    field:'complainter name',
     header: 'COMPLAINTER NAME'},

    {
    id:'fir status',
    field:'fir status',
     header:'FIR STATUS'},
     {
        id: 'action',
        field: 'action',
         header: 'ACTION'}
     

];

const _header=[
    {
        id:"ACTS_AND_SECTIONS",
        header:"अधिनियम और धाराएं"

    },
    {
        id:"INCIDENT",
        header:"घटना"

    },
    {
        id:"COMPLAINANT",
        header:"शिकायतकर्ता"

    },
    {
        id:"FIR_DETAILS",
        header:"प्राथमिकी विवरण"

    },
    {
        id:"VICTIM_INFORMATION",
        header:"पीड़ित सूचना"

    },
    {
        id:"ACCUSED",
        header:"अभियुक्त"

    },
    {
        id:"PROPERTY_TYPE",
        header:"संपत्ति का प्रकार"

    },
    {
        id:"INJURY_DOCUMENT",
        header:"चोट दस्तावेज़"

    },
    {
        id:"SIGNTURE",
        header:"हस्ताक्षर"

    },
    {
        id:"FIR_CLASSIFICATION",
        header:"प्राथमिकी वर्गीकरण"

    },
]





   const FirRegistrationIIF1=()=>{
    const [showform,setShowform]=useState (false)
    const [table, setTable] = useState([])



    const _form=<>            
                <TabView>
                    {_header.map((e)=>{
                        return(
                            <TabPanel header={e.header }key={e.id} > 
                                  {/* <FormFieldRenger/> */}
                          </TabPanel>
                        )
                    })}                   
                    
                </TabView> 
    
    </>






    const _table=<>   
                <DataTable value={table} tableStyle={{ minWidth: '50rem' }}>
                    {columns.map((col, i) => (
                        <Column key={col.field} field={col.field} header={col.header} />
                    ))}
                </DataTable>            
            </>

    const _content=()=>showform?_form:_table;
    

    return( 
        <div >
        <WrapperPanel title={showform ? "New FIR RegistrationIIF1": "Pending FIR"} btnlabel={showform?"Add New FIR":null } onClickCb={ ()=>setShowform(prev=>!prev)}   >
       {_content()}
        </WrapperPanel>
        </div>
    )
}
        


   export default FirRegistrationIIF1