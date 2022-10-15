import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import Row from '../../components/Row';
import Select from '../../components/Select';
import { handleValues, clearValues } from '../../redux/balance/balanceSlice';
import { toast } from 'react-toastify';
const AddBalance = () => {
  const { name, amount, description, balanceType } = useSelector(
    (store) => store.balance
  );
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleValues({ name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !name || !description) {
      toast.error('Please fill the values');
    }
  };
  return (
    <Wrapper>
      <SectionTitle title='add balance' />
      <form className='form'>
        <div className='form-center'>
          <Row
            type='text'
            name='name'
            value={name}
            handleChange={handleChange}
          />
          <Row
            type='number'
            name='amount'
            value={amount}
            handleChange={handleChange}
          />
          <Select
            name='balanceType'
            value={balanceType}
            handleChange={handleChange}
            options={['income', 'expense']}
            labelText='balance type'
          />
          <Row
            type='text'
            name='description'
            value={description}
            handleChange={handleChange}
          />
          <button
            type='button'
            className='btn btn-block clear-btn'
            onClick={() => dispatch(clearValues())}
          >
            reset
          </button>
          <button
            type='submit'
            className='btn btn-block submit-btn'
            onClick={handleSubmit}
          >
            submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .btn-block {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
  .clear-btn {
    background-color: #e75f6a;
  }
  .clear-btn:hover {
    background-color: #842029;
  }
  @media (min-width: 800px) {
    .btn-block {
      margin-bottom: 0;
    }
  }
`;

export default AddBalance;
