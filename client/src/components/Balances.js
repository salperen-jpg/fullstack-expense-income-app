import React from 'react';
import GridView from './GridView';
import ListView from './ListView';
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBalances } from '../redux/balance/balanceSlice';
import { Link } from 'react-router-dom';
const Balances = () => {
  const { gridView, allBalances, isLoading, filters } = useSelector(
    (store) => store.balance
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllBalances());
  }, [filters]);

  if (isLoading) {
    return <Loading />;
  }

  if (allBalances.length === 0) {
    return (
      <div className='no-balance'>
        <h3>No balance at the moment.</h3>
        <Link to='/dashboard/add-balance' className='btn'>
          Add Balance
        </Link>
      </div>
    );
  }

  if (gridView) {
    return <GridView balances={allBalances} />;
  }

  return <ListView balances={allBalances} />;
};

export default Balances;
