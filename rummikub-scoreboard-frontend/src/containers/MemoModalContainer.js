import React from 'react';
import { connect } from 'react-redux';
import { changeMemo, showError, hideModal } from '../modules/memoModal';
import { startSavingScore, endSavingScore } from '../modules/scoreboard';
import MemoModal from '../components/MemoModal';

const MemoFormContainer = ({
  memoModal,
  scores,
  onChangeMemo,
  onShowError,
  onStartSavingScore,
  onEndSavingScore,
  onHideModal
}) => (
  <MemoModal
    memoModal={memoModal}
    scores={scores}
    onChangeMemo={onChangeMemo}
    onShowError={onShowError}
    onStartSavingScore={onStartSavingScore}
    onEndSavingScore={onEndSavingScore}
    onHideModal={onHideModal}
  />
);

const mapStateToProps = ({ memoModal, scoreboard }) => ({
  memoModal,
  scores: scoreboard.scores
});

const mapDispatchToProps = dispatch => ({
  onChangeMemo: memo => dispatch(changeMemo(memo)),
  onShowError: () => dispatch(showError()),
  onStartSavingScore: selectedUserIndex =>
    dispatch(startSavingScore(selectedUserIndex)),
  onEndSavingScore: (selectedUserIndex, user) =>
    dispatch(endSavingScore(selectedUserIndex, user)),
  onHideModal: () => dispatch(hideModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(MemoFormContainer);
