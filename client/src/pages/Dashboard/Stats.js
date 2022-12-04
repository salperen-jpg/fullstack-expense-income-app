import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Chart, Loading, StatsOverview } from '../../components';
import SectionTitle from '../../components/SectionTitle';
import { getStats } from '../../redux/balance/balanceSlice';
const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, stats, numOfExpenses, numOfIncomes } = useSelector(
    (store) => store.balance
  );

  React.useEffect(() => {
    dispatch(getStats());
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Wrapper>
      <SectionTitle title='Stats' />
      <div className='footer'>
        <StatsOverview expenses={numOfExpenses} incomes={numOfIncomes} />
        {numOfExpenses + numOfIncomes !== 0 && <Chart stats={stats} />}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .footer {
    display: grid;
    gap: 2rem;
  }
`;
export default Stats;
