import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loading } from '../../components';

const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useSelector((store) => store.user);

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to='/' />;
  }

  return children;
};

export default ProtectedRoute;
