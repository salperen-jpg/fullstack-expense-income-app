import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdOutlineFormatAlignCenter,
  MdOutlineSupervisedUserCircle,
} from 'react-icons/md';
import { toggleSidebar } from '../redux/features/UI/uiSlice';
const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          className='btn toggle-btn'
          onClick={() => dispatch(toggleSidebar())}
        >
          <MdOutlineFormatAlignCenter />
        </button>
        <h1>LOGO</h1>
        <button className='btn user-btn'>
          <MdOutlineSupervisedUserCircle />
          user
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  background-color: var(--white);
  height: 6rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background-color: transparent;
    box-shadow: none;
    padding: 0;
    color: var(--primary-500);
    svg {
      font-size: 2rem;
    }
  }
  h1 {
    display: flex;
    align-items: center;
    margin: 0;
  }
  .toggle-btn:hover {
    transform: rotateZ(90deg);
  }
  .user-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      font-size: 1.5rem;
    }
  }
  @media screen {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
  }
`;
export default Navbar;
