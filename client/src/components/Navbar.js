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
import UpdateProfile from './UpdateProfile';
import Logo from './Logo';
const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((store) => store.user.user);
  const [showDropDown, setShowDropDown] = React.useState(false);
  const [showUpdateProfile, setShowUpdateProfile] = React.useState(false);

  return (
    <Wrapper>
      <div className='nav-center'>
        <button
          className='btn toggle-btn'
          onClick={() => dispatch(toggleSidebar())}
        >
          <MdOutlineFormatAlignCenter />
        </button>
        <Logo />
        {/* <h2>Dashboard</h2> */}
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
              onClick={() => {
                setShowUpdateProfile(!showUpdateProfile);
                setShowDropDown(!showDropDown);
              }}
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
      <UpdateProfile
        showUpdateProfile={showUpdateProfile}
        setShowUpdateProfile={setShowUpdateProfile}
      />
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
  .logo {
    width: 9rem;
  }
  /* h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  } */
  @media (min-width: 800px) {
    .logo {
      width: 15rem;
    }
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
    opacity: 0;
    transition: var(--transition);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transform: translateY(123%);

    button {
      width: 100%;
      padding: 0.5rem 1rem;
      font-size: 0.775rem;
      background: var(--primary-200);
    }
  }
  .showw {
    opacity: 1;
  }

  @media (min-width: 800px) {
    position: sticky;
    top: 0;
    z-index: 200;
    .nav-center {
      width: 90%;
    }
  }
`;
export default Navbar;
