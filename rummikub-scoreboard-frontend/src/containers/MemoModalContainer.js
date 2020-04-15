import React from 'react';
import { useSelector } from 'react-redux';
import { changeMemo, showError, hideModal } from '../modules/memoModal';
import { startSavingScore, endSavingScore } from '../modules/scoreboard';
import MemoModal from '../components/MemoModal';
import useActions from '../lib/useActions';

const MemoFormContainer = () => {
  const { memoModal, scores } = useSelector(
    ({ memoModal: memo, scoreboard }) => ({
      memoModal: memo,
      scores: scoreboard.scores
    })
  );

  const [
    onChangeMemo,
    onShowError,
    onStartSavingScore,
    onEndSavingScore,
    onHideModal
  ] = useActions(
    [changeMemo, showError, startSavingScore, endSavingScore, hideModal],
    []
  );

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
