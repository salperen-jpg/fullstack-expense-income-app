import React from 'react';
import GridView from './GridView';
import ListView from './ListView';
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBalances } from '../redux/balance/balanceSlice';
const Balances = () => {
  const { gridView, allBalances, isLoading } = useSelector(
    (store) => store.balance
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllBalances());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (gridView) {
    return <GridView balances={allBalances} />;
  }

  return <ListView balances={allBalances} />;
};

export default Balances;
