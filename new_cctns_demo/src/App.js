import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import FirRegistrationIIF1 from "./pages/fir/FirRegistrationIIF1.js/FirRegistrationIIF1";
import FormFieldRender from "./components/common/formFieldRender/FormFieldRender";
import { useState } from "react";

const textField = {
  id: "name",
  name: "name",
  label: "My Name",
  placeholder: "Please enter your name",
  type: "text",
  required: true,
};

function App() {
  const [formObj, setformObj] = useState(null);
  const _handleChange = (field, e) => {
    const { value } = e.target;
    setformObj((prev) => ({ ...prev, [field.name]: value }));
  };
  console.log(formObj);
  return (
    <div className="App p-4">
      <FirRegistrationIIF1 />
      <div className="col-3">
        <FormFieldRender
          field={textField}
          formData={formObj}
          onChangeCb={_handleChange}
        />
      </div>
    </div>
  );
}

export default App;
