import React from 'react';
import styled from 'styled-components';
import Balance from './Balance';

const GridView = ({ balances }) => {
  return (
    <Wrapper>
      {balances.map((balance) => {
        return <Balance key={balance._id} {...balance} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default GridView;
