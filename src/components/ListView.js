import React from 'react';
import styled from 'styled-components';
import { FaDollarSign, FaCalendarAlt, FaMinus, FaPlus } from 'react-icons/fa';
import BalanceIconText from './BalanceIconText';
const ListView = ({ balances }) => {
  return (
    <Wrapper>
      {balances.map((balance) => {
        const { name, description, id, amount, typeFilter } = balance;
        return (
          <article key={balance.id}>
            <header>
              <h5>{name}</h5>
              <div className={`status ${typeFilter}`}>
                <p
                  className={`icon-container ${
                    typeFilter === 'income' ? 'income' : 'expense'
                  }`}
                >
                  {typeFilter === 'income' ? (
                    <FaPlus className='icon' />
                  ) : (
                    <FaMinus className='icon' />
                  )}
                </p>
                {typeFilter === 'income' ? 'income' : 'expense'}
              </div>
            </header>
            <div className='info'>
              <BalanceIconText icon={<FaDollarSign />} text={amount} fixed />
              <BalanceIconText icon={<FaCalendarAlt />} text='Oct 21,2022' />
            </div>

            <footer>
              <p>{description}</p>
              <div className='btn-container'>
                <button className='btn edit-btn'>edit</button>
                <button className='btn red-btn'>delete</button>
              </div>
            </footer>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 4rem;

  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  article {
    background-color: var(--white);
    box-shadow: var(--shadow-1);
    border-radius: var(--borderRadius);
  }
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
  .info {
    padding: 1.5rem 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  footer {
    padding: 1.5rem 1rem;
  }
  .btn-container {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }
  @media (min-width: 992px) {
    footer {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default ListView;
