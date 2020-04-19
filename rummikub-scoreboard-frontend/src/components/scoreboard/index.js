import React, { useEffect } from 'react';
import Loader from '../../commons/Loader';
import Score from './Score';
import { ScoreBoardBlock, ScoreWrapper, StyledSpan } from './style';

const ScoreBoard = ({ isLoading, scores, onReadUsers, onShowModal }) => {
  useEffect(() => {
    onReadUsers();
  }, [onReadUsers]);

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
          onClick={onShowModal}
        />
        <StyledSpan>:</StyledSpan>
        <Score
          index={1}
          user={scores[1].user}
          isReversed
          isLoading={scores[1].isLoading}
          onClick={onShowModal}
        />
      </ScoreWrapper>
    </ScoreBoardBlock>
  );
};

export default React.memo(ScoreBoard);
