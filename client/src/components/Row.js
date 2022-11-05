import React from 'react';

const Row = ({ type, name, value, handleChange, labelText, min }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name}>{labelText || name}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        min={min}
      />
    </div>
  );
};

export default Row;
