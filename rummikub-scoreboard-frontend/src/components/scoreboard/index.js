import React, { useEffect, useCallback } from 'react';
import Loader from '../../commons/Loader';
import Score from './Score';
import { readUser } from '../../lib/api/users';
import { ScoreBoardBlock, ScoreWrapper, StyledSpan } from './style';

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
