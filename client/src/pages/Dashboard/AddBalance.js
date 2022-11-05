import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/SectionTitle';
import { useDispatch, useSelector } from 'react-redux';
import Row from '../../components/Row';
import Select from '../../components/Select';
import {
  handleValues,
  clearValues,
  createBalance,
} from '../../redux/balance/balanceSlice';
import { toast } from 'react-toastify';
const AddBalance = () => {
  const { name, amount, description, balanceType, isLoading } = useSelector(
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
      return;
    }
    dispatch(createBalance({ name, amount, description, balanceType }));
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
            min={0}
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
            className='btn btn-block red-btn'
            onClick={() => dispatch(clearValues())}
          >
            reset
          </button>
          <button
            type='submit'
            className='btn btn-block submit-btn'
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className='loading'>
                <p className='small-loading'></p>
              </div>
            ) : (
              'Submit'
            )}
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

  @media (min-width: 800px) {
    .btn-block {
      margin-bottom: 0;
    }
  }
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    p {
      margin: 0;
    }
  }
  .small-loading {
    width: 1rem;
    height: 1rem;
    border: 1px solid var(--white);
    border-radius: 50%;
    border-top-color: purple;
    animation: spinner 0.6s linear infinite;
  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  button::disabled {
    cursor: not-allowed;
  }
`;

export default AddBalance;
