import "./formfields.css";
import React from "react";

const FormField = ({ fieldArr = [], onChangecb, formObj }) => {
  return (
    <div>
      {fieldArr.map((ele) => {
        return ele.type === "input" ? (
          <div className="form_container" key={ele.id}>
            <label className="form_label">{ele.label}</label>
            <input
              name={ele.name}
              placeholder={ele.placeholder}
              required
              onChange={onChangecb}
              value={formObj?.[ele.name] ?? ""}
            />
          </div>
        ) 
        : ele.type === "radio" ? (
          <div className="form_container" key={ele.id}>
            <label className="form_label">{ele.label}</label>
            {ele.option.map((el) => {
              return (
                <div key={el.id}>
                  <input
                  type="radio"
                  name={ele.name}
                  value={el.value}
                    onChange={onChangecb}
                  />
                  <label>{el.value}</label>
                </div>
              )
              
            })}
          </div>
        )   
        
        
        : ele.type === "select" ? (
          <div className="form_container" key={ele.name}>
            <label className="form_label">{ele.name}</label>
            <select name={ele.name} value={formObj?.[ele.name]} onChange={onChangecb}>
            {ele.option.map((el) => {
              return (
                <option key={el.value} value={el.value}>
                {el.label}
                </option>
              )
            })}
            </select>
           
          </div>
        )
        : ele.type === "checkbox" ? (
          <div className="" key={ele.id}>
            <label className="">{ele.label}</label>
            {ele.skills.map((el) => {
              return (
                <div key={el.id}>
                  <input type={ele.type} name={ele.name} checked={formObj?.[ele.name]?.some(abc=>abc===el.value)} value= {el.value} onChange={onChangecb}>
                  </input> 
                  <label>{el.label}</label>
                  
                </div>
              )
              
            })}
          </div>
        ) 
        
        
        
        : null;
      })}
    </div>
  );
};

export default FormField;
