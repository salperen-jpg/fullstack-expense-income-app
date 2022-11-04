import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../assets/error.svg';
import styled from 'styled-components';
const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={errorImg} alt='errorImg' />
        <h2>
          We don't seem to <br /> find this page
        </h2>
        <Link to='/dashboard' className='btn'>
          home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    h2 {
      text-align: center;
      margin: 0;
    }
    img {
      max-width: 40rem;
    }
  }
`;
export default Error;
