import "./formfields.css";
import React from 'react'

const FormField = ({ fieldArr = [],onChangecb,formObj }) => {
  
  return (
    <div>
      {fieldArr.map((ele) => {
        return (
          <div className="form_container" key={ele.id}>
            <label className="form_label">{ele.label}</label>
            <input
              type={ele.type}
              name={ele.name}
              placeholder={ele.placeholder}
              required
              onChange={onChangecb}
              value={formObj?.[ele.name] ?? ""}
            />
          </div>
        );
      })}

      
         

    </div>
  );
  
};


export default FormField;
