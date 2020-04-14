import React from 'react';
import { connect } from 'react-redux';
import {
  readUsers,
  showModal,
  startSavingScore,
  endSavingScore,
  closeModal
} from '../modules/scoreboard';
import ScoreBoard from '../components/Scoreboard/ScoreBoard';

const ScoreBoardContainer = ({
  isLoading,
  form,
  scores,
  onReadUsers,
  onShowModal,
  onStartSavingScore,
  onEndSavingScore,
  onCloseModal
}) => (
  <ScoreBoard
    isLoading={isLoading}
    form={form}
    scores={scores}
    onReadUsers={onReadUsers}
    onShowModal={onShowModal}
    onStartSavingScore={onStartSavingScore}
    onEndSavingScore={onEndSavingScore}
    onCloseModal={onCloseModal}
  />
);

const mapStateToProps = ({ scoreboard }) => ({
  isLoading: scoreboard.isLoading,
  form: scoreboard.form,
  scores: scoreboard.scores
});

const mapDispatchToProps = dispatch => ({
  onReadUsers: users => dispatch(readUsers(users)),
  onShowModal: (selectedIndex, value) =>
    dispatch(showModal(selectedIndex, value)),
  onStartSavingScore: selectedIndex =>
    dispatch(startSavingScore(selectedIndex)),
  onEndSavingScore: (selectedIndex, user) =>
    dispatch(endSavingScore(selectedIndex, user)),
  onCloseModal: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoardContainer);
