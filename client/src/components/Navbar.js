import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import {
  MdOutlineFormatAlignCenter,
  MdOutlineSupervisedUserCircle,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';
import { toggleSidebar } from '../redux/features/UI/uiSlice';
import { logOut } from '../redux/user/userSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((store) => store.user.user);
  const [showDropDown, setShowDropDown] = React.useState(false);
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
        <div className='dropdown-container'>
          <button
            className='btn user-btn'
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <MdOutlineSupervisedUserCircle />
            {name}
            {showDropDown ? (
              <MdOutlineKeyboardArrowUp />
            ) : (
              <MdOutlineKeyboardArrowDown />
            )}
          </button>
          <div
            className={`${
              showDropDown ? 'log-out-container showw' : 'log-out-container'
            }`}
          >
            <button
              type='button'
              className='logout btn'
              onClick={() => dispatch(logOut())}
            >
              logout
            </button>
          </div>
        </div>
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
  .dropdown-container {
    position: relative;
  }
  .log-out-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    transform: translateY(60px);
    opacity: 0;
    transition: var(--transition);
    button {
      width: 100%;
      padding: 1rem 1rem;
      background: var(--primary-200);
    }
  }
  .showw {
    display: block;
    opacity: 1;
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
