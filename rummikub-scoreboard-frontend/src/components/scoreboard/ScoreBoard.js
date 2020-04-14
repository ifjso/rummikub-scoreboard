import React, { useEffect, useCallback, useRef } from 'react';
import styled from 'styled-components';
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

const ScoreBoard = ({
  isLoading,
  form,
  scores,
  onReadUsers,
  onShowModal,
  onStartSavingScore,
  onEndSavingScore,
  onCloseModal
}) => {
  const memoInputRef = useRef(null);

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

  const onSubmit = useCallback(
    async memo => {
      const { selectedIndex, value } = form;
      const { user } = scores[selectedIndex];

      onStartSavingScore(selectedIndex);

      const { data } = await updateUser({
        owner: user.owner,
        score: user.score + value,
        emojiType: getEmojiType(value),
        memo
      });

      onEndSavingScore(selectedIndex, data);
    },
    [form, scores, onEndSavingScore, onStartSavingScore]
  );

  const onMountModal = useCallback(() => memoInputRef.current.focus(), []);

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

      <InputModal
        open={form.isInputting}
        title="무슨 일이 있었는지 기록해 보아요."
        onMount={onMountModal}
        onClose={onCloseModal}
      >
        <MemoForm ref={memoInputRef} onSubmit={onSubmit} />
      </InputModal>
    </ScoreBoardBlock>
  );
};

export default React.memo(ScoreBoard);
