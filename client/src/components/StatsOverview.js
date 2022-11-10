import React from 'react';
import styled from 'styled-components';
import StatsInfo from './StatsInfo';
import { useSelector } from 'react-redux';

const StatsOverview = ({ incomes, expenses }) => {
  const { numOfExpenses, numOfIncomes } = useSelector((store) => store.balance);
  const overview = [
    {
      num: numOfIncomes || 0,
      text: 'incomes',
      bg: '#DBFFDB',
      col: '#006D00',
    },
    {
      num: numOfExpenses || 0,
      text: 'expenses',
      bg: '#FFB6B6',
      col: '#FF3737',
    },
  ];
  return (
    <Wrapper>
      {overview.map((single, index) => {
        return <StatsInfo key={index} {...single} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.article``;
export default StatsOverview;
