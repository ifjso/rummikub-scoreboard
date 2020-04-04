import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import produce from 'immer';
import Responsive from '../commons/Responsive';
import Loader from '../commons/Loader';
import Score from './Score';
import { readUser, updateUser } from '../../lib/api/users';
import { getEmojiType } from '../../helpers/emoji';

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

const ScoreBoard = () => {
  const isCancelled = useRef(false);
  const [state, setState] = useState({
    isLoading: true,
    scores: [
      { user: null, isLoading: false },
      { user: null, isLoading: false }
    ]
  });

  useEffect(() => {
    const readUsersFunc = async () => {
      const users = await Promise.all([readUser(1), readUser(2)]);
      if (!isCancelled.current) {
        setState(
          produce(baseState => {
            baseState.isLoading = false;
            baseState.scores[0].user = users[0].data;
            baseState.scores[1].user = users[1].data;
          })
        );
      }
    };

    readUsersFunc();

    return () => {
      isCancelled.current = true;
    };
  }, []);

  const onClick = useCallback(
    (index, user) => async value => {
      setState(
        produce(baseState => {
          baseState.scores[index].isLoading = true;
        })
      );

      const { data } = await updateUser({
        owner: user.owner,
        score: user.score + value,
        emojiType: getEmojiType(value)
      });

      if (!isCancelled.current) {
        setState(
          produce(baseState => {
            baseState.scores[index].isLoading = false;
            baseState.scores[index].user = data;
          })
        );
      }
    },
    []
  );

  return state.isLoading ? (
    <Loader type="Hearts" color="#bf0303" />
  ) : (
    <ScoreBoardBlock>
      <ScoreWrapper>
        <Score
          user={state.scores[0].user}
          isReversed={false}
          isLoading={state.scores[0].isLoading}
          onClick={onClick(0, state.scores[0].user)}
        />
        <StyledSpan>:</StyledSpan>
        <Score
          user={state.scores[1].user}
          isReversed
          isLoading={state.scores[1].isLoading}
          onClick={onClick(1, state.scores[1].user)}
        />
      </ScoreWrapper>
    </ScoreBoardBlock>
  );
};

export default React.memo(ScoreBoard);
