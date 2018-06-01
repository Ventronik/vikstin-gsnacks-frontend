import React from 'react';

import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

const Unauthorized = () => {
  return (
    <div className="unauthorized-container">
      <Modal className="unauthorized-modal" isOpen centered>
        <ModalBody className="text-center">
          <h3>UNAUTHORIZED</h3>
          You must be a sentenced convict of the <strong>Vikstin Federal Penitentiary</strong> to access our content.
        </ModalBody>
        <ModalFooter>
          <Button href="/login">Log In</Button>
          <Button href="/signup">Sign Up</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Unauthorized;
