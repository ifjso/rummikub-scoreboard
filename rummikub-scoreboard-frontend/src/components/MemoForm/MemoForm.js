import React, { useCallback, useRef } from 'react';
import { Form, Input } from 'semantic-ui-react';
import InputModal from '../../commons/InputModal';
import { updateUser } from '../../lib/api/users';
import { getEmojiType } from '../../helpers/emoji';

const MemoForm = ({
  form,
  scores,
  onChangeMemo,
  onShowError,
  onStartSavingScore,
  onEndSavingScore,
  onHideModal
}) => {
  const inputRef = useRef(null);

  const onChange = useCallback(e => onChangeMemo(e.target.value.trim()), [
    onChangeMemo
  ]);

  const onSubmit = useCallback(async () => {
    if (!form.memo) {
      onShowError();
      return;
    }

    const { selectedUserIndex, value } = form;
    const { user } = scores[selectedUserIndex];

    onStartSavingScore(selectedUserIndex);
    onHideModal();

    const { data } = await updateUser({
      owner: user.owner,
      score: user.score + value,
      emojiType: getEmojiType(value),
      memo: form.memo
    });

    onEndSavingScore(selectedUserIndex, data);
  }, [
    form,
    scores,
    onShowError,
    onStartSavingScore,
    onHideModal,
    onEndSavingScore
  ]);

  const onMountModal = useCallback(() => inputRef.current.focus(), []);

  return (
    <InputModal
      open={form.isInputting}
      title="무슨 일이 있었는지 기록해 보아요."
      onMount={onMountModal}
      onClose={onHideModal}
    >
      <Form error={form.error} onSubmit={onSubmit}>
        <Form.Field error={form.error}>
          <Input
            ref={inputRef}
            size="huge"
            fluid
            action={{
              color: form.error ? 'google plus' : 'blue',
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

export default React.memo(MemoForm);
