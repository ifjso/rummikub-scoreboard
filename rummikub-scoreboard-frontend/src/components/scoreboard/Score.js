import React from 'react';
import styled from 'styled-components';

const ScoreBlock = styled.div`
  width: 30%;
  height: 30%;
  padding: 1rem;
  border: 4px dashed #afafaf;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin: 0;
    font-size: 10rem;
  }
`;

const Score = () => (
  <ScoreBlock>
    <h1>99</h1>
  </ScoreBlock>
);

export default Score;
