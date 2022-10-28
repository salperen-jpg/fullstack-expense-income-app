import React from 'react';
import GridView from './GridView';
import ListView from './ListView';
import Loading from './Loading';
import { useSelector } from 'react-redux';
const Balances = () => {
  const { gridView, allBalances, isLoading } = useSelector(
    (store) => store.balance
  );

  if (isLoading) {
    return <Loading />;
  }

  if (gridView) {
    return <GridView balances={allBalances} />;
  }

  return <ListView balances={allBalances} />;
};

export default Balances;
