import React from 'react';
import styled from 'styled-components';
import Responsive from '../commons/Responsive';
import Score from './Score';
import Button from '../commons/Button';

const ScoreBoardBlock = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Wrapper = styled(Responsive)`
  height: 46vh;
  display: flex;
  padding: 2rem;
  align-items: center;
  justify-content: space-between;
  span {
    margin: 0;
    font-size: 12vw;
  }
`;

const Breaker = styled.div`
  flex-basis: 100%;
  height: 0;
`;

const ButtonDe = styled(Button)`
  font-size: 10px;
`;
const ScoreBoard = () => (
  <ScoreBoardBlock>
    <Wrapper>
      <Score reversed={false} owner={1} />
      <span>
        <b>:</b>
      </span>
      <Score reversed owner={2} />
      {/* <HistoryList /> */}
    </Wrapper>
    <Breaker />
    <ButtonDe>aa</ButtonDe>
  </ScoreBoardBlock>
);

export default ScoreBoard;
