import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return <Wrapper className='loading'></Wrapper>;
};
const Wrapper = styled.div`
  width: 6rem;
  height: 6rem;
  border: 3px solid var(--grey-100);
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 3rem;
  border-top-color: var(--primary-500);
  animation: spinner 0.6s linear infinite;

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;
