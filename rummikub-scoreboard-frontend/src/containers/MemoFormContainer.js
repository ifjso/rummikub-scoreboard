import React from 'react';
import { connect } from 'react-redux';
import { changeMemo, showError, hideModal } from '../modules/form';
import { startSavingScore, endSavingScore } from '../modules/scoreboard';
import MemoForm from '../components/MemoForm';

const MemoFormContainer = ({
  form,
  scores,
  onChangeMemo,
  onShowError,
  onStartSavingScore,
  onEndSavingScore,
  onHideModal
}) => (
  <MemoForm
    form={form}
    scores={scores}
    onChangeMemo={onChangeMemo}
    onShowError={onShowError}
    onStartSavingScore={onStartSavingScore}
    onEndSavingScore={onEndSavingScore}
    onHideModal={onHideModal}
  />
);

const mapStateToProps = ({ form, scoreboard }) => ({
  form,
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
