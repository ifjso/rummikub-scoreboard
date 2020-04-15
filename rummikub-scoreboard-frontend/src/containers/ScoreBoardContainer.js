import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { readUsers } from '../modules/scoreboard';
import { showModal } from '../modules/memoModal';
import ScoreBoard from '../components/Scoreboard';

const ScoreBoardContainer = () => {
  const { isLoading, scores } = useSelector(({ scoreboard }) => scoreboard);

  const dispatch = useDispatch();
  const onReadUsers = useCallback(users => dispatch(readUsers(users)), [
    dispatch
  ]);
  const onShowModal = useCallback(
    (selectedUserIndex, value) => dispatch(showModal(selectedUserIndex, value)),
    [dispatch]
  );

  return (
    <ScoreBoard
      isLoading={isLoading}
      scores={scores}
      onReadUsers={onReadUsers}
      onShowModal={onShowModal}
    />
  );
};

export default React.memo(ScoreBoardContainer);
