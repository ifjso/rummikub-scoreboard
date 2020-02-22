import React from 'react';
import styled from 'styled-components';
import Responsive from '../commons/Responsive';
import Score from './Score';

const ScoreBoardBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled(Responsive)`
  height: 80vh;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  border: solid 1px;
  h2 {
    margin: 0;
    font-size: 5rem;
  }
`;

const ScoreBoard = () => (
  <ScoreBoardBlock>
    <Wrapper>
      <Score />
      <h2>:</h2>
      <Score />
      {/* <HistoryList /> */}
      {/* <div className="board">
        <h1>4</h1>
      </div>
      <div className="board">
        <h1>vs</h1>
      </div>
      <div className="board">
        <h1>5</h1>
      </div> */}
    </Wrapper>
  </ScoreBoardBlock>
);

export default ScoreBoard;
