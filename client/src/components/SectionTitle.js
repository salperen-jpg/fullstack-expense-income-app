import React from 'react';
import styled from 'styled-components';
const SectionTitle = ({ title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className='underline'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin-top: 2rem;
  .underline {
    width: 7rem;
    height: 4px;
    margin: 1rem auto;
    background-color: var(--primary-500);
  }
  h2 {
    margin: 0;
  }
`;

export default SectionTitle;
