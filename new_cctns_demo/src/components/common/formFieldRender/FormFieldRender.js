import React from 'react'
import { Dropdown } from 'primereact/dropdown';

import { Calendar } from 'primereact/calendar';

import { Checkbox } from 'primereact/checkbox';


import { InputOtp } from 'primereact/inputotp';

        

import { Password } from 'primereact/password';


import { RadioButton } from 'primereact/radiobutton';
import { InputNumber } from 'primereact/inputnumber';

import { MultiSelect } from 'primereact/multiselect';

import { InputTextarea } from 'primereact/inputtextarea';

import { InputSwitch } from 'primereact/inputswitch';
        
        
        
        
        
        
        
        
        
        

const FormFieldRender = (props) => {
    const {field=[],formData={}, onChangeCb=()=>{}, disabled=false}=props

  const textField=()=>{
    const {InputText}=require("primereact/inputtext")
    return(
        <div className="form-group">
            <label htmlFor={field.label} >{field?.label} {field.required?<span>*</span>:null}</label>
            <InputText value={formData?.[field.name]??""}  onChange={(e)=> onChangeCb(field,e)}  placeholder={field?.placeholder}  
            disabled={field.disabled??disabled}
            
            />
        </div>
    )
  }

  const dropdownField =()=>{
    const {Dropdown}=require("primereact/inputtext")
    return(
          
        <div className="card flex justify-content-center">
            {/* <Dropdown value={selectedCity} onChange={(e)=> onChangeCb(field,e)} options={cities} optionLabel="name" 
    placeholder="Select a City" className="w-full md:w-14rem" /> */}
        </div>
    )

  }
  const calendarField=()=>{
    return(
        <div>
        {/* <Calendar value={date} onChange={(e)=> onChangeCb(field,e)} /> */}
        </div>
    )

  }

  const checkboxField=()=>{
    return(
        <div>
        {/* <Checkbox onChange={(e)=> onChangeCb(field,e)} checked={checked}></Checkbox> */}
        </div>
    )
  }

  const inputOtpField=()=>{
    return(
        <div>
        {/* <InputOtp value={token} onChange={(e)=> onChangeCb(field,e)}/> */}
        </div>
    )
  }

  const passwordField=()=>{

    return(
        <div>
        {/* <Password value={value} onChange={(e)=> onChangeCb(field,e)} feedback={false} tabIndex={1} /> */}
        </div>
    )
  }

  const numberField=()=>{
    return(
        <div>
            {/* <InputNumber value={value1} onChange={(e)=> onChangeCb(field,e)} />
           <InputNumber value={value2} onChange={(e)=> onChangeCb(field,e)} useGrouping={false} />
           <InputNumber value={value3} onChange={(e)=> onChangeCb(field,e)} minFractionDigits={2} maxFractionDigits={5} />
           <InputNumber value={value4} onChange={(e)=> onChangeCb(field,e)} min={0} max={100} /> */}
        </div>
    )
  }


   const  multiselectField=()=>{
    return(
        <div>
            {/* <MultiSelect value={selectedCities} onChange={(e)=> onChangeCb(field,e)} options={cities} optionLabel="name" 
    placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" /> */}
        </div>
    )
   }


   const inputTextArea=()=>{
    return(
        <div>
            {/* <InputTextarea value={value} onChange={(e)=> onChangeCb(field,e)} rows={5} cols={30} /> */}
        </div>
    )
   }

   const inputSwitch =()=>{
    return(
        <div>
            {/* <InputSwitch checked={checked} onChange={(e)=> onChangeCb(field,e)} /> */}
        </div>
    )
   }




  const radioButtonField =()=>{
    <div className="flex flex-wrap gap-3">
    return(
        <div className="flex flex-wrap gap-3">
    {/* <div className="flex align-items-center">
        <RadioButton inputId="ingredient1" name="pizza" value="Cheese" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Cheese'} />
        <label htmlFor="ingredient1" className="ml-2">Cheese</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient2" name="pizza" value="Mushroom" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Mushroom'} />
        <label htmlFor="ingredient2" className="ml-2">Mushroom</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient3" name="pizza" value="Pepper" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Pepper'} />
        <label htmlFor="ingredient3" className="ml-2">Pepper</label>
    </div>
    <div className="flex align-items-center">
        <RadioButton inputId="ingredient4" name="pizza" value="Onion" onChange={(e) => setIngredient(e.value)} checked={ingredient === 'Onion'} />
        <label htmlFor="ingredient4" className="ml-2">Onion</label>
    </div> */}
</div>
    )
    </div>
  }








  function getField() {
        return (
            <>
                {field?.type === 'text' ? textField() : <h1>fdgfdgfdg</h1>}
                {field?.type === 'dropdown' ? dropdownField() : null}
                {field?.type === 'calendar' ? calendarField() : null}
                {field?.type === 'checkbox' ? checkboxField() : null}
                {field?.type === 'inputOtp' ? inputOtpField() : null}
                {field?.type === 'password' ? passwordField() : null}
                {field?.type === 'radioButton' ? radioButtonField() : null}
                {field?.type === 'number' ? numberField() : null}
                {field?.type === 'multiselect' ? multiselectField() : null}
                {field?.type === 'inputtextarea' ? inputTextArea() : null}
                {field?.type === 'inputSwitch' ? inputSwitch() : null}
            </>
        );
    }

    return getField()  
}

export default FormFieldRender
