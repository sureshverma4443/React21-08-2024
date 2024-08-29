import './MainForm.css'
import FormField from '../../common/Formfields.js/Formfields'

let formdata = {
    header: " School Admission form",
    StudentDetails:[{
   
                id:"studentName",
                label:"studentName",
                type:"text",
                type:"input",
                placeholder: "Enter your Name",
                subtype:"text",
                name:"studenttName"
      
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
  return(
    <form>
        <center>


      <h1>{formdata.header}</h1>
      <FormField  fieldArr={formdata.StudentDetails}/>
     
     

    </center>
    </form> 
    

  )
}




export default MainForm
