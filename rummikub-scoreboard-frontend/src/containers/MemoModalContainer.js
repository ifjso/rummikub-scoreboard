import React from 'react';
import { useSelector } from 'react-redux';
import { changeMemo, showError, hideModal } from '../modules/memoModal';
import { saveScore } from '../modules/scoreboard';
import MemoModal from '../components/MemoModal';
import useActions from '../lib/useActions';

const MemoFormContainer = () => {
  const { memoModal, scores } = useSelector(
    ({ memoModal: memo, scoreboard }) => ({
      memoModal: memo,
      scores: scoreboard
    })
  );

  const [onChangeMemo, onShowError, onSaveScore, onHideModal] = useActions(
    [changeMemo, showError, saveScore, hideModal],
    []
  );

  return (
    <MemoModal
      memoModal={memoModal}
      scores={scores}
      onChangeMemo={onChangeMemo}
      onShowError={onShowError}
      onSaveScore={onSaveScore}
      onHideModal={onHideModal}
    />
  );
};

export default React.memo(MemoFormContainer);
