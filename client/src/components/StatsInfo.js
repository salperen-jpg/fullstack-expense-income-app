import React from 'react';
import styled from 'styled-components';

const StatsInfo = ({ num, text, bg, col, icon }) => {
  return (
    <Wrapper col={col} bg={bg}>
      <div>
        <span className='num'>{num}</span>
        <span> {text}</span>
      </div>
      <div className='icon-container'>
        <div className='inner'>{icon}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border-left: 10px solid ${(props) => props.bg};
  padding: 3rem;
  background-color: var(--white);
  color: ${(props) => props.col};
  margin-bottom: 1rem;
  border-radius: 10px;
  box-shadow: var(--shadow-1);
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .num {
      font-size: 5rem;
      padding: 0;
      line-height: 1;
    }
    span:nth-child(2) {
      text-transform: capitalize;
    }
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .inner {
      width: 5rem;
      height: 5rem;
      background-color: ${(props) => props.bg};
      display: grid;
      place-items: center;
      border-radius: 5px;
    }
    svg {
      font-size: 3rem;
    }
  }
`;
export default StatsInfo;
