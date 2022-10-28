import React from 'react';

const Select = ({ name, value, handleChange, options, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name}>{labelText || name}</label>
      <select name={name} id={name} value={value} onChange={handleChange}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
