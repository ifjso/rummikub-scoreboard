import React, { useState, useCallback } from 'react';
import { Form, Input } from 'semantic-ui-react';

const MemoForm = React.forwardRef(({ onSubmit = i => i }, ref) => {
  const [form, setForm] = useState({ memo: '', error: false });

  const onChange = useCallback(
    e => setForm({ memo: e.target.value.trim(), error: false }),
    []
  );

  const onMemoFormSubmit = useCallback(() => {
    if (!form.memo) {
      setForm(prevForm => ({ ...prevForm, error: true }));
      return;
    }

    onSubmit(form.memo);
  }, [form.memo, onSubmit]);

  return (
    <Form error={form.error} onSubmit={onMemoFormSubmit}>
      <Form.Field error={form.error}>
        <Input
          ref={ref}
          size="huge"
          fluid
          action={{
            color: form.error ? 'google plus' : 'blue',
            icon: 'write',
            size: 'huge'
          }}
          onChange={onChange}
          maxLength={20}
        />
      </Form.Field>
    </Form>
  );
});

export default React.memo(MemoForm);
