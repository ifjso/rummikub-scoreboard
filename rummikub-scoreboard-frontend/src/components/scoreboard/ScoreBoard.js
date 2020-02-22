import React from 'react';
import styled from 'styled-components';
import Responsive from '../commons/Responsive';

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
  align-items: center;
  justify-content: space-between;
  border: solid 1px;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const ScoreBoard = () => (
  <ScoreBoardBlock>
    <Wrapper>
      {/* <Score /> */}
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
