import React from 'react';
import { connect } from 'react-redux';
import {
  readUsers,
  calculate,
  saveStart,
  saveEnd,
  closeModal
} from '../modules/scoreboard';
import ScoreBoard from '../components/Scoreboard/ScoreBoard';

const ScoreBoardContainer = ({
  isLoading,
  form,
  scores,
  onReadUsers,
  onCalculate,
  onSaveStart,
  onSaveEnd,
  onModalClose
}) => (
  <ScoreBoard
    isLoading={isLoading}
    form={form}
    scores={scores}
    onReadUsers={onReadUsers}
    onCalculate={onCalculate}
    onSaveStart={onSaveStart}
    onSaveEnd={onSaveEnd}
    onModalClose={onModalClose}
  />
);

const mapStateToProps = ({ scoreboard }) => ({
  isLoading: scoreboard.isLoading,
  form: scoreboard.form,
  scores: scoreboard.scores
});

const mapDispatchToProps = dispatch => ({
  onReadUsers: users => dispatch(readUsers(users)),
  onCalculate: (selectedIndex, value) =>
    dispatch(calculate(selectedIndex, value)),
  onSaveStart: selectedIndex => dispatch(saveStart(selectedIndex)),
  onSaveEnd: (selectedIndex, user) => dispatch(saveEnd(selectedIndex, user)),
  onModalClose: () => dispatch(closeModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoardContainer);
