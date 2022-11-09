import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loading } from '../../components';
import { getStats } from '../../redux/balance/balanceSlice';
const Stats = () => {
  const dispatch = useDispatch();
  const { isLoading, stats, numOfExpenses, numOfIncomes } = useSelector(
    (store) => store.balance
  );

  React.useEffect(() => {
    dispatch(getStats());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return <div>Stats</div>;
};

export default Stats;
