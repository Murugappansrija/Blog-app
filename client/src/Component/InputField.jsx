import React from "react";

const InputField = (placeholder, className, name, value, type, onChange) => {
  return <input
  placeholder= {placeholder}
  name={name}
  value={value}
  type={type}
  onChange = {onChange}
  />;
};

export default InputField;
