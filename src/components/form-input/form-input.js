import React from 'react';
import './form-input.sass';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const { value } = otherProps;

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label className={`${value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      ) : (
        ''
      )}
    </div>
  );
};

export default FormInput;
