import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import NavLinks from './NavLinks';
import Logout from './Logout';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.ui);

  return (
    <Wrapper>
      <div className={!isSidebarOpen ? 'big-sidebar show' : 'big-sidebar'}>
        <div className='content'>
          <header>
            <h4>Logo</h4>
          </header>
          <NavLinks />
          <Logout />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    box-shadow: px 0px 0px 0px rgba(0, 0, 0, 0.8);
    display: block;
    .big-sidebar {
      width: 250px;
      min-height: 100vh;
      height: 100%;
      background-color: var(--white);
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
      height: 100vh;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding: 0 2rem;
    }
    .show {
      margin-left: 0;
    }

    .nav-link {
      display: flex;
      padding: 1.5rem 2rem;
      align-items: center;
      gap: 1rem;
      text-transform: capitalize;
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 0.1rem;
      color: var(--grey-500);
      transition: var(--transition);
      svg {
        font-size: 1.5rem;
      }
    }
    .nav-link:hover {
      background-color: var(--backgroundColor);
      padding: 1.5rem 2.5rem;
      border-left: 8px solid var(--primary-500);
    }
    .active {
      color: var(--primary-500);
    }
  }
`;
export default BigSidebar;
