import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Responsive from '../../commons/Responsive';
import Loader from '../../commons/Loader';
import Score from './Score';
import { readUser } from '../../lib/api/users';

const ScoreBoardBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const ScoreWrapper = styled(Responsive)`
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

const StyledSpan = styled.span`
  padding-top: 3vw;
  font-weight: bold;
  color: white;
`;

const ScoreBoard = ({ isLoading, scores, onReadUsers, onShowModal }) => {
  useEffect(() => {
    const readUsers = async () => {
      const users = await Promise.all([readUser(1), readUser(2)]);
      onReadUsers([users[0].data, users[1].data]);
    };

    if (isLoading) {
      readUsers();
    }
  }, [isLoading, onReadUsers]);

  const onClick = useCallback(
    async (index, value) => onShowModal(index, value),
    [onShowModal]
  );

  return isLoading ? (
    <Loader type="Hearts" color="#bf0303" />
  ) : (
    <ScoreBoardBlock>
      <ScoreWrapper>
        <Score
          index={0}
          user={scores[0].user}
          isReversed={false}
          isLoading={scores[0].isLoading}
          onClick={onClick}
        />
        <StyledSpan>:</StyledSpan>
        <Score
          index={1}
          user={scores[1].user}
          isReversed
          isLoading={scores[1].isLoading}
          onClick={onClick}
        />
      </ScoreWrapper>
    </ScoreBoardBlock>
  );
};

export default React.memo(ScoreBoard);
