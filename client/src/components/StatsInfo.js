import React from 'react';
import styled from 'styled-components';

const StatsInfo = ({ num, text, bg, col }) => {
  return (
    <Wrapper col={col} bg={bg}>
      <div>
        <span className='num'>{num}</span>
        <span> {text}</span>
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
  }
`;
export default StatsInfo;
