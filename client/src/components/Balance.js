import React from 'react';
import styled from 'styled-components';
import { FaDollarSign, FaCalendarAlt, FaMinus, FaPlus } from 'react-icons/fa';
import BalanceIconText from './BalanceIconText';
import { useDispatch } from 'react-redux';
import { deleteBalance, setEditBalance } from '../redux/balance/balanceSlice';
import { Link } from 'react-router-dom';
const Balance = ({ name, description, _id, amount, balanceType }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper
      className={balanceType === 'income' ? 'border-green' : 'border-red'}
    >
      <header>
        <h5>{name}</h5>
        <div className={`status ${balanceType}`}>
          <p
            className={`icon-container ${
              balanceType === 'income' ? 'income' : 'expense'
            }`}
          >
            {balanceType === 'income' ? (
              <FaPlus className='icon' />
            ) : (
              <FaMinus className='icon' />
            )}
          </p>
          {balanceType === 'income' ? 'income' : 'expense'}
        </div>
      </header>
      <div className='info'>
        <BalanceIconText icon={<FaDollarSign />} text={amount} fixed />
        <BalanceIconText icon={<FaCalendarAlt />} text='Oct 21,2022' />

        <p className='description'>{description}</p>
      </div>
      <div className='btn-container'>
        <Link
          to='/dashboard/add-balance'
          className='btn edit-btn'
          onClick={() => dispatch(setEditBalance(_id))}
        >
          edit
        </Link>
        <button
          className='btn red-btn'
          onClick={() => dispatch(deleteBalance(_id))}
        >
          delete
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background-color: var(--white);
  border-radius: var(--borderRadius);
  box-shadow: var(--shadow-1);
  header {
    padding: 1.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--grey-200);
    h5,
    p {
      margin: 0;
      padding: 0;
    }
  }
  /* FIX THIS CODE */
  .status {
    display: flex;
    align-items: center;
    border: 1px solid var(--grey-200);
    border-radius: var(--borderRadius);
    padding: 0.5rem;
    gap: 1rem;
  }
  .icon-container {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    border: 1px solid var(--grey-200);
    border-radius: 50%;
  }
  .income {
    background-color: var(--green-dark);
    color: var(--green-light);
  }
  .expense {
    background-color: var(--red-dark);
    color: var(--red-light);
  }

  .icon {
    height: 1.3rem;
    width: 1.3rem;
  }
  /* INFO */
  .info {
    padding: 1.5rem 1rem;
    padding-bottom: 0;
  }
  .info div {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--grey-500);
    margin-bottom: 1rem;
    svg {
      font-size: 1.3rem;
    }
  }
  .description {
    letter-spacing: 0.1rem;
    color: var(--grey-500);
    margin: 0;
  }
  .description::first-letter {
    text-transform: capitalize;
  }
  .btn-container {
    padding: 1.5rem 1rem;
    text-align: right;
    .red-btn {
      margin-left: 1rem;
    }
    .edit-btn {
      background-color: var(--green-light);
      color: var(--green-dark);
    }
  }
`;

export default Balance;
