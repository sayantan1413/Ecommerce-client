import React, { useState } from "react";
import FormContext from "./FormContext";

const FormProvider = (props) => {
  const [form, setForm] = useState(0);
  return (
    <FormContext.Provider value={[form, setForm]}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
