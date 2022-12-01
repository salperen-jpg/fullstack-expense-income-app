import React from 'react';
import styled from 'styled-components';
import StatsInfo from './StatsInfo';
import { useSelector } from 'react-redux';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { HiDocument } from 'react-icons/hi';

const StatsOverview = ({ incomes, expenses }) => {
  const { numOfExpenses, numOfIncomes } = useSelector((store) => store.balance);
  const overview = [
    {
      num: numOfIncomes + numOfExpenses || 0,
      text: 'total',
      bg: '#8080FF ',
      col: '#000092',
      icon: <HiDocument />,
    },
    {
      num: numOfIncomes || 0,
      text: 'incomes',
      bg: '#DBFFDB',
      col: '#006D00',
      icon: <FaPlus />,
    },
    {
      num: numOfExpenses || 0,
      text: 'expenses',
      bg: '#FFB6B6',
      col: '#FF3737',
      icon: <FaMinus />,
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

const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;
export default StatsOverview;
