import React, { useContext } from "react";
import Button from "../Button/Button.js";
import FormContext from "../../../Context/FormContext.js";

import "./Info.css";
import Icon from "../Icons/Icon.js";

const Info = (props) => {
  const [form, setForm] = useContext(FormContext);
  return (
    <div className="info">
      <p>{props.text}</p>
      <Icon />
      {props.value ? (
        <div onClick={() => setForm(1)}>
          <Button text={"SIGN UP"} />
        </div>
      ) : (
        <div onClick={() => setForm(0)}>
          <Button text={"LOG IN"} />
        </div>
      )}
    </div>
  );
};

export default Info;
