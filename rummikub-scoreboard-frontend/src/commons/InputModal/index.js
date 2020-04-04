import React from 'react';
import { Modal, Header } from 'semantic-ui-react';

const InputModal = ({
  open = true,
  title = '',
  onMount = i => i,
  onClose = i => i,
  children
}) => (
  <Modal size="fullscreen" open={open} onMount={onMount} onClose={onClose}>
    <Modal.Content>
      <Modal.Description>
        <Header>{title}</Header>
        {children}
      </Modal.Description>
    </Modal.Content>
  </Modal>
);
export default InputModal;
