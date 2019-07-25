import React from "react";

const renderField = ({
  input,
  label,
  placeholder,
  className,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={placeholder}
        type={type}
        className={className}
      />
      <div className="uk-form-danger">
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  </div>
);

export default renderField;
