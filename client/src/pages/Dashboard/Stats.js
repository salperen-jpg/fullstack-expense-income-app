import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Chart, Loading, StatsOverview } from '../../components';
import SectionTitle from '../../components/SectionTitle';
import { getStats, getAmount } from '../../redux/balance/balanceSlice';
const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, stats, numOfExpenses, numOfIncomes } = useSelector(
    (store) => store.balance
  );

  // React.useEffect(() => {
  //   dispatch(getAmount());
  // }, []);

  React.useEffect(() => {
    dispatch(getStats());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <SectionTitle title='Stats' />
      <div className='footer'>
        <StatsOverview expenses={numOfExpenses} incomes={numOfIncomes} />
        <Chart stats={stats} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer {
    display: grid;
    /* align-items: center; */
    justify-content: center;
    gap: 1rem;
  }
  @media (min-width: 992px) {
    .footer {
      grid-template-columns: 1fr 1fr;
      justify-content: center;
    }
  }
`;
export default Stats;
