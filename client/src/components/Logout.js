import React from 'react';
import { MdOutlineLogout } from 'react-icons/md';
import styled from 'styled-components';
const Logout = () => {
  return (
    <Wrapper>
      <button className='btn logOut-btn'>
        logout
        <MdOutlineLogout />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .logOut-btn {
    background-color: transparent;
    color: var(--grey-500);
    padding: 1rem 2rem;
    margin-bottom: 2rem;
    box-shadow: none;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    gap: 0.5rem;
    font-weight: 600;
    svg {
      font-size: 1.5rem;
    }
  }
  .logOut-btn:hover {
    color: var(--primary-500);
    transform: translateY(-5px);
  }
`;

export default Logout;
