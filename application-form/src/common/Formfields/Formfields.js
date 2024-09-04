import "./formfields.css";
import React from "react";

const FormField = ({ fieldArr = [], onChangecb, formObj }) => {
  const _inputfield = (ele) => {
    return (
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
    );
  };

  const _radiofield = (ele) => {
    return <div className="form_container" key={ele.id}>
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
        );
      })}
    </div>;
  };

  const _selectfield = (ele) => {
    return <div className="form_container" key={ele.name}>
      <label className="form_label">{ele.name}</label>
      <select name={ele.name} value={formObj?.[ele.name]} onChange={onChangecb}>
        {ele.option.map((el) => {
          return (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          );
        })}
      </select>
    </div>;
  };

  const _checkbox = (ele) => {
    return <div className="" key={ele.id}>
      <label className="">{ele.label}</label>
      {ele.skills.map((el) => {
        return (
          <div key={el.id}>
            <input
              type={ele.type}
              name={ele.name}
              checked={formObj?.[ele.name]?.some((abc) => abc === el.value)}
              value={el.value}
              onChange={onChangecb}
            ></input>
            <label>{el.label}</label>
          </div>
        );
      })}
    </div>;
  };

  const _renderfield = (ele) => {
    
    return <>
      {ele.type === "input" ? _inputfield(ele) : null}
      {ele.type === "select" ? _selectfield(ele) : null}
      {ele.type === "checkbox" ? _checkbox(ele) : null}
      {ele.type === "radio" ? _radiofield(ele) : null}
    </>;
  };
  return (
    <div className="form-field">{fieldArr.map((ele) => _renderfield(ele))}</div>
  );
};

export default FormField;
