import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  handleFilterInputs,
  clearFilterInputs,
} from '../redux/balance/balanceSlice';
import Row from './Row';
import Select from './Select';

const Filters = () => {
  // name search, balanceType, sort to based on a name
  const {
    filters: { nameFilter, min, max, typeFilter, sort, amountFilter },
    isLoading,
  } = useSelector((store) => store.balance);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (isLoading) return;
    dispatch(
      handleFilterInputs({ name: e.target.name, value: e.target.value })
    );
  };

  return (
    <Wrapper>
      <form className='form'>
        <div className='form-center filter-form'>
          <Row
            type='text'
            name='nameFilter'
            labelText='Search '
            value={nameFilter}
            handleChange={handleChange}
          />
          <Select
            name='typeFilter'
            labelText='Balance Type'
            value={typeFilter}
            options={['all', 'income', 'expense']}
            handleChange={handleChange}
          />
          <Select
            name='sort'
            value={sort}
            options={['a-z', 'z-a', 'newest', 'oldest']}
            handleChange={handleChange}
          />
          <div className='form-row'>
            {/* <label htmlFor='amountFilter'>Amount</label> */}
            <span className='amount'>{amountFilter}$</span>
            <input
              type='range'
              name='amountFilter'
              id='amountFilter'
              className='range-input'
              min={min}
              max={max}
              value={amountFilter}
              onChange={handleChange}
            />
          </div>
          <button
            type='button'
            className='btn clear-btn red-btn'
            onClick={() => dispatch(clearFilterInputs())}
          >
            Clear
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form {
    padding: 1rem;
  }
  .filter-form {
    display: block;
  }
  .amount {
    display: block;
    font-size: 0.875rem;
    letter-spacing: 1px;
    margin-top: 1rem;
  }
  input[type='range'] {
    padding: 0;
  }
  .clear-btn {
    display: block;
    width: 100%;
    margin-top: 1rem;
  }
  @media (min-width: 1200px) {
    .form {
      position: sticky;
      top: 7rem;
      width: 200px;
    }
  }
`;
export default Filters;
