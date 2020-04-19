import React, { useCallback, useRef } from 'react';
import { Form, Input } from 'semantic-ui-react';
import InputModal from '../../commons/InputModal';

const MemoModal = ({
  memoModal,
  scores,
  onChangeMemo,
  onShowError,
  onSaveScore,
  onHideModal
}) => {
  const inputRef = useRef(null);

  const onChange = useCallback(e => onChangeMemo(e.target.value.trim()), [
    onChangeMemo
  ]);

  const onSubmit = useCallback(() => {
    if (!memoModal.memo) {
      onShowError();
      return;
    }

    const { selectedUserIndex, value } = memoModal;
    const { user } = scores[selectedUserIndex];

    onSaveScore({ selectedUserIndex, user, value, memo: memoModal.memo });
    onHideModal();
  }, [memoModal, scores, onSaveScore, onHideModal, onShowError]);

  const onMountModal = useCallback(() => inputRef.current.focus(), []);

  return (
    <InputModal
      open={memoModal.isInputting}
      title="무슨 일이 있었는지 기록해 보아요."
      onMount={onMountModal}
      onClose={onHideModal}
    >
      <Form error={memoModal.error} onSubmit={onSubmit}>
        <Form.Field error={memoModal.error}>
          <Input
            ref={inputRef}
            size="huge"
            fluid
            action={{
              color: memoModal.error ? 'google plus' : 'blue',
              icon: 'write',
              size: 'huge'
            }}
            onChange={onChange}
            maxLength={50}
          />
        </Form.Field>
      </Form>
    </InputModal>
  );
};

export default React.memo(MemoModal);
