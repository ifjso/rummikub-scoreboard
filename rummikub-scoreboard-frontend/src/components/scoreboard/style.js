import styled from 'styled-components';
import Responsive from '../../commons/Responsive';

export const ScoreBoardBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ScoreWrapper = styled(Responsive)`
  width: 86vw;
  height: 90vw;
  padding: 2vw;
  align-items: center;
  justify-content: space-between;
  > span {
    margin: 0;
    font-size: 12vw;
  }
`;

export const StyledSpan = styled.span`
  padding-top: 3vw;
  font-weight: bold;
  color: white;
`;
