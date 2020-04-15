import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeMemo, showError, hideModal } from '../modules/memoModal';
import { startSavingScore, endSavingScore } from '../modules/scoreboard';
import MemoModal from '../components/MemoModal';

const MemoFormContainer = () => {
  const { memoModal, scores } = useSelector(
    ({ memoModal: memo, scoreboard }) => ({
      memoModal: memo,
      scores: scoreboard.scores
    })
  );

  const dispatch = useDispatch();
  const onChangeMemo = useCallback(memo => dispatch(changeMemo(memo)), [
    dispatch
  ]);
  const onShowError = useCallback(() => dispatch(showError()), [dispatch]);
  const onStartSavingScore = useCallback(
    selectedUserIndex => dispatch(startSavingScore(selectedUserIndex)),
    [dispatch]
  );
  const onEndSavingScore = useCallback(
    (selectedUserIndex, user) =>
      dispatch(endSavingScore(selectedUserIndex, user)),
    [dispatch]
  );
  const onHideModal = useCallback(() => dispatch(hideModal()), [dispatch]);

  return (
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
};

export default React.memo(MemoFormContainer);
