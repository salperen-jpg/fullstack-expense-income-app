import React from 'react';
import { MdGridView, MdList } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { handleViews } from '../redux/balance/balanceSlice';
const BalanceView = () => {
  const { gridView, allBalances } = useSelector((store) => store.balance);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div>
        <button
          type='button'
          className={gridView ? 'btn view-btn active' : 'btn view-btn'}
          onClick={() => dispatch(handleViews())}
        >
          <MdGridView />
        </button>
        <button
          type='button'
          className={!gridView ? 'btn view-btn active' : 'btn view-btn'}
          onClick={() => dispatch(handleViews())}
        >
          <MdList />
        </button>
      </div>
      <hr />
      <span>
        {allBalances.length} balance{allBalances.length > 1 && "'s"} found
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 2rem;

  .view-btn {
    background-color: transparent;
    box-shadow: none;
    color: var(--grey-400);
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  .active {
    background-color: var(--grey-400);
    color: var(--white);
  }

  span {
    font-size: 0.875rem;
  }
`;

export default BalanceView;
