import React from 'react';
import { connect } from 'react-redux';
import { readUsers } from '../modules/scoreboard';
import { showModal } from '../modules/form';
import ScoreBoard from '../components/Scoreboard/ScoreBoard';

const ScoreBoardContainer = ({
  isLoading,
  scores,
  onReadUsers,
  onShowModal
}) => (
  <ScoreBoard
    isLoading={isLoading}
    scores={scores}
    onReadUsers={onReadUsers}
    onShowModal={onShowModal}
  />
);

const mapStateToProps = ({ scoreboard }) => ({
  isLoading: scoreboard.isLoading,
  scores: scoreboard.scores
});

const mapDispatchToProps = dispatch => ({
  onReadUsers: users => dispatch(readUsers(users)),
  onShowModal: (selectedUserIndex, value) =>
    dispatch(showModal(selectedUserIndex, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoreBoardContainer);
