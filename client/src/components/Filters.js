import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { handleFilterInputs } from '../redux/balance/balanceSlice';
import Row from './Row';
import Select from './Select';

const Filters = () => {
  // name search, balanceType, sort to based on a name
  const {
    filters: { nameFilter, min, max, price, typeFilter, sort },
  } = useSelector((store) => store.balance);
  const dispatch = useDispatch();

  const handleChange = (e) => {
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
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  .filter-form {
    display: block;
    position: sticky;
    top: 10rem;
  }
`;
export default Filters;
