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
  flex-wrap: wrap;
`;

const Wrapper = styled(Responsive)`
  width: 86vw;
  height: 40vw;
  padding: 2vw;
  align-items: center;
  justify-content: space-between;
  > span {
    margin: 0;
    font-size: 12vw;
  }
`;

const ScoreBoard = () => (
  <ScoreBoardBlock>
    <Wrapper>
      <Score reversed={false} owner={1} />
      <span>
        <b>:</b>
      </span>
      <Score reversed owner={2} />
    </Wrapper>
  </ScoreBoardBlock>
);

export default ScoreBoard;
