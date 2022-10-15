import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../../redux/features/UI/uiSlice';

const AllBalance = () => {
  const dispatch = useDispatch();

  return (
    <div>
      AllBalance
      <button className='btn' onClick={() => dispatch(toggleSidebar())}>
        toggle
      </button>
    </div>
  );
};

export default AllBalance;
