import "./formfields.css";
import React from 'react'

const FormField = ({ fieldArr = [] }) => {
  const [formObj, setFormObj] = React.useState(null);

  const _handleChange = (e) => {
    const { name, value } = e.target;
    setFormObj((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
   console.log(formObj)
   const _resetForm(e)=>{
    e.preventDefault();
    setFormObj(null)
   }
  return (
    <form>
      {fieldArr.map((ele) => {
        return (
          <div className="form_container" key={ele.id}>
            <label className="form_label">{ele.label}</label>
            <input
              type={ele.type}
              name={ele.name}
              placeholder={ele.placeholder}
              required
              onChange={_handleChange}
              value={formObj?.[ele.name]}
            />
          </div>
        );
      })}

      <div className="btn_container">
        <button className="Submit_btn">Submit</button>
        <button className="Reset_btn" onChange={_resetForm}>Reset</button>
      </div>
    </form>
  );
};

export default FormField;
