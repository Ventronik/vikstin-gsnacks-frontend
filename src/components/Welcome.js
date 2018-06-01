import React from 'react';

import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Welcome extends React.Component {
  render () {
    return (
      <div className="welcome-container">
        <Modal className="welcome-modal" isOpen="true" centered="true">
          <ModalBody>
            <h4>Welcome, #452{this.props.user.id}.</h4>
            You have been stripped of your name. From now on, we will be referring to you by your ID number. Feel free to view our premium penitentiary snacks and leave reviews.
          </ModalBody>
          <ModalFooter>
            <Button href="/snacks">View Snacks</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
