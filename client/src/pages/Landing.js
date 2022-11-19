import React from 'react';
import landingImg from '../assets/saving.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const Landing = () => {
  const { user } = useSelector((store) => store.user);
  return (
    <>
      <Wrapper>
        {user && <Navigate to='/dashboard' />}
        <header>
          <h4>Logo coming up</h4>
        </header>
        <div className='landing-hero'>
          <div className='info-container'>
            <h1>
              Take control of your <span>Money</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              numquam, nemo, accusantium beatae eum ut sequi unde, libero
              voluptate eius facilis vitae dignissimos excepturi rerum impedit
              odit molestiae aut deserunt!
            </p>
            <Link to='/register' className='btn'>
              login/register
            </Link>
          </div>
          <img src={landingImg} alt='img' className='main-img' />
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  header {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }
  .landing-hero {
    min-height: calc(100vh - 6rem);
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    display: grid;
    align-items: center;
    .info-container {
      h1 > span {
        color: var(--primary-500);
      }
    }
    .main-img {
      display: none;
    }
  }
  @media (min-width: 992px) {
    .landing-hero {
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      .main-img {
        display: block;
        max-width: 40rem;
      }
    }
  }
`;

export default Landing;
