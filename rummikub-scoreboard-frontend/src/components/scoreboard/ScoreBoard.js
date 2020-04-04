import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
import produce from 'immer';
import Responsive from '../../commons/Responsive';
import Loader from '../../commons/Loader';
import InputModal from '../../commons/InputModal';
import MemoForm from '../MemoForm/MemoForm';
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
  const memoInputRef = useRef(null);
  const [state, setState] = useState({
    isLoading: true,
    form: { selectedIndex: 0, value: 0, isInputting: false },
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

  const onClick = useCallback(async (index, value) => {
    setState(
      produce(baseState => {
        baseState.form.selectedIndex = index;
        baseState.form.value = value;
        baseState.form.isInputting = true;
      })
    );
  }, []);

  const onSubmit = useCallback(
    async memo => {
      const { selectedIndex, value } = state.form;
      const { user } = state.scores[selectedIndex];

      setState(
        produce(baseState => {
          baseState.scores[selectedIndex].isLoading = true;
          baseState.form.isInputting = false;
        })
      );

      const { data } = await updateUser({
        owner: user.owner,
        score: user.score + value,
        emojiType: getEmojiType(value),
        memo
      });

      if (!isCancelled.current) {
        setState(
          produce(baseState => {
            baseState.scores[selectedIndex].user = data;
            baseState.scores[selectedIndex].isLoading = false;
          })
        );
      }
    },
    [state.form, state.scores]
  );

  const onModalMount = useCallback(() => memoInputRef.current.focus(), []);
  const onModalClose = useCallback(
    () =>
      setState(
        produce(baseState => {
          baseState.form.isInputting = false;
        })
      ),
    []
  );

  return state.isLoading ? (
    <Loader type="Hearts" color="#bf0303" />
  ) : (
    <ScoreBoardBlock>
      <ScoreWrapper>
        <Score
          index={0}
          user={state.scores[0].user}
          isReversed={false}
          isLoading={state.scores[0].isLoading}
          onClick={onClick}
        />
        <StyledSpan>:</StyledSpan>
        <Score
          index={1}
          user={state.scores[1].user}
          isReversed
          isLoading={state.scores[1].isLoading}
          onClick={onClick}
        />
      </ScoreWrapper>

      <InputModal
        open={state.form.isInputting}
        title="무슨 일이 있었는지 기록해 보아요."
        onMount={onModalMount}
        onClose={onModalClose}
      >
        <MemoForm ref={memoInputRef} onSubmit={onSubmit} />
      </InputModal>
    </ScoreBoardBlock>
  );
};

export default React.memo(ScoreBoard);
