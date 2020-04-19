import React from 'react';
import { useSelector } from 'react-redux';
import { readUsers } from '../modules/scoreboard';
import { showModal } from '../modules/memoModal';
import ScoreBoard from '../components/Scoreboard';
import useActions from '../lib/useActions';

const ScoreBoardContainer = () => {
  const { scores, isLoading = true } = useSelector(
    ({ scoreboard, loading }) => ({
      scores: scoreboard,
      isLoading: loading['scoreboard/READ_USERS']
    })
  );

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
