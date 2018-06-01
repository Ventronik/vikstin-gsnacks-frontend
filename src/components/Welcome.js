import React from 'react';

import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <Modal className="welcome-modal" isOpen="true" centered="true">
        <ModalBody>
          <h4>Welcome, #4322.</h4>
          You have been stripped of your name. From now on, we will be referring to you by your ID number. Feel free to view our premium penitentiary snacks and leave reviews.
        </ModalBody>
        <ModalFooter>
          <Button href="/snacks">View Snacks</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Welcome;
