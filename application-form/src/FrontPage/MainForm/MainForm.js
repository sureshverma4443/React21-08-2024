import './MainForm.css'
import FormField from '../../common/Formfields/Formfields'
import React from 'react';

let formdata = {
    header: " School Admission form",
    StudentDetails:[{
   
                id:"studentName",
                label:"studentName",
                type:"text",
                type:"input",
                placeholder: "Enter your Name",
                subtype:"text",
                name:"studentName"
      
},
{
  id:"fatherName",
  label:"fatherName",
  type:"text",
  type:"input",
  placeholder: "Enter your fathername",
  subtype:"text",
  name:"fathername"

},

{
    id:"mobile",
    label:"Mobile",
    type:"text",
    type:"input",
    placeholder: "Enter your Mobile",
    subtype:"text",
    name:"mobile"

},

{
  id:"email",
  label:"Email",
  type:"text",
  type:"input",
  placeholder: "Enter your Mobile",
  subtype:"text",
  name:"email"

},
{
  id:"age",
  label:"Age",
  type:"text",
  type:"input",
  placeholder: "Enter your age",
  subtype:"text",
  name:"age"

},
{
  id:"gender",
  label:"Gender",
  type:"text",
  type:"input",
  placeholder: "Enter your gender",
  subtype:"text",
  name:"gender"

},
{
  id:"regionl",
  label:"Regionl",
  type:"text",
  type:"input",
  placeholder: "Enter your Mobile",
  subtype:"text",
  name:"regionl"

},
]
}

function MainForm () {
  const [formObj, setFormObj] = React.useState(null);
  const [tableData, setTableData] = React.useState([]);

  const _handleChange = (e) => {
    const { name, value } = e.target;
    setFormObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

console.log(formObj)

   const _submitData=()=>{
    if(!!formObj?.studentName && !!formObj?.fathername && !!formObj?.gender && !!formObj?.mobile){
      setTableData(prev => [...prev,formObj])
        setFormObj(null);
    }else{
      alert('Please fill all the fields')
    }
  }
   const _resetForm =(e)=>{
    e.preventDefault();
    setFormObj(null)
   }


  return(
        <center>
      <h1>{formdata.header}</h1>
      <FormField  fieldArr={formdata.StudentDetails} onChange={_handleChange} formObj={formObj}/> 

      <div className="btn_container">
        <button className="Submit_btn" onClick={_submitData}>Submit</button>
        <button className="Reset_btn" onClick={_resetForm}>Reset</button>
      </div>
      <hr></hr>
      <div className='table_container'>
   <table>
    
        <tr>
          <th>Sr.no</th>
          <th>Student Name</th>
          <th>father Name</th>
          <th>Gender</th>
          <th>mobile</th>
        </tr>
        
        {tableData.map((el,index) => {
         return(
          <tr>
          <td>{++index}</td>
          <td>{el?.studentName}</td>
          <td>{el?.fathername}</td>
          <td>{el?.gender}</td>
          <td>{el?.mobile}</td>
        </tr>
         )
        })} 
 
   </table>
</div>





    </center>  
  )
}





export default MainForm
