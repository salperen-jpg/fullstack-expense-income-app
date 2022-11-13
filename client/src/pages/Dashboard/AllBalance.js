import React from 'react';
import { Balances, BalanceView, Filters } from '../../components';
import styled from 'styled-components';
const AllBalance = () => {
  return (
    <Wrapper>
      <Filters />
      <div>
        <BalanceView />
        <Balances />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 992px) {
    grid-template-columns: 200px 1fr;
    gap: 3rem;
  }
`;

export default AllBalance;
