import React from 'react';
import { Outlet } from 'react-router-dom';
import { BigSidebar, Navbar, SmallSidebar } from '../components';

import styled from 'styled-components';
const SharedLayout = () => {
  return (
    <Wrapper>
      <main>
        {/* out of flow */}
        <SmallSidebar />
        <BigSidebar />
        <div className='dashboard'>
          <Navbar />
          <div className='dash'>
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  main {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dash {
    width: 90vw;
    margin: 0 auto;
  }
  @media (min-width: 992px) {
    main {
      grid-template-columns: auto 1fr;
    }
    .dash {
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export default SharedLayout;
