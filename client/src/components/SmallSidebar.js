import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import NavLinks from './NavLinks';
import Logout from './Logout';
import { toggleSidebar } from '../redux/UI/uiSlice';
import Logo from './Logo';
const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.ui);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
        <div className='sidebar-content'>
          <button className='btn close-btn'>
            <MdClose onClick={toggle} />
          </button>
          <Logo />
          <NavLinks toggle={toggle} />
          <Logout />
        </div>
      </aside>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sidebar {
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: -1;
    visibility: hidden;
    display: grid;
    place-items: center;
    transform: scale(0);
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 1;
    visibility: visible;
    transform: scale(1);
  }
  .sidebar-content {
    width: 95%;
    height: 95%;
    background-color: var(--white);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  .logo {
    width: 15rem;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 4rem;
  }
  .nav-link {
    display: flex;
    padding: 0.5rem 2rem;
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

  .active {
    color: var(--primary-500);
  }
  .close-btn {
    position: absolute;
    background-color: transparent;
    box-shadow: none;
    color: red;
    font-size: 2rem;
    top: 2rem;
    right: 2rem;
  }
  @media (min-width: 992px) {
    display: none;
  }
`;
export default SmallSidebar;
