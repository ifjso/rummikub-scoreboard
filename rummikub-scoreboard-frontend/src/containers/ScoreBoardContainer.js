import React from 'react';
import { useSelector } from 'react-redux';
import { readUsers } from '../modules/scoreboard';
import { showModal } from '../modules/memoModal';
import ScoreBoard from '../components/Scoreboard';
import useActions from '../lib/useActions';

const ScoreBoardContainer = () => {
  const { isLoading, scores } = useSelector(({ scoreboard }) => scoreboard);

  const [onReadUsers, onShowModal] = useActions([readUsers, showModal], []);

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
