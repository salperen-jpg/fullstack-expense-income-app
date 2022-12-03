import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import NavLinks from './NavLinks';
import Logout from './Logout';
import Logo from './Logo';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.ui);

  return (
    <Wrapper>
      <div className={!isSidebarOpen ? 'big-sidebar show' : 'big-sidebar'}>
        <div className='content'>
          <header>
            <Logo />
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
    background-color: blue;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.06);
    display: block;
    .big-sidebar {
      width: 250px;
      min-height: 100vh;
      height: 100%;
      background-color: var(--white);
      margin-left: -250px;
      transition: var(--transition);
    }
    .show {
      margin-left: 0;
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
      .logo {
        width: 13rem;
      }
    }
    .nav-links {
      margin-top: 2rem;
    }
    .nav-link {
      display: flex;
      padding: 1.5rem 2rem;
      align-items: center;
      gap: 1rem;
      text-transform: capitalize;
      font-size: 1.1rem;
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
