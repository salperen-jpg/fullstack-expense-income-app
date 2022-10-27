import React from 'react';

const BalanceIconText = ({ icon, text, fixed }) => {
  return (
    <div>
      {icon}
      <span className='text'>{fixed ? text.toFixed(2) : text}</span>
    </div>
  );
};

export default BalanceIconText;
