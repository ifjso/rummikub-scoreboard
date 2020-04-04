import React, { useRef } from 'react';
import { Modal, Header, Form, Input } from 'semantic-ui-react';

const InputModal = ({
  open = true,
  title = '',
  error = false,
  onSubmit = i => i,
  onClose = i => i
}) => {
  const inputRef = useRef(null);

  return (
    <Modal
      size="fullscreen"
      open={open}
      onClose={onClose}
      onMount={() => inputRef.current.focus()}
    >
      <Modal.Content>
        <Modal.Description>
          <Header>{title}</Header>
          <Form error={error} onSubmit={onSubmit}>
            <Form.Field error={error}>
              <Input
                ref={inputRef}
                fluid
                size="huge"
                action={{
                  color: error ? 'google plus' : 'blue',
                  icon: 'write',
                  size: 'huge'
                }}
              />
            </Form.Field>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default InputModal;
