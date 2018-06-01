import React from 'react';

import { Row, Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Reviews from './Reviews';

class Snack extends React.Component {
  constructor (props) {
    super(props);
    this.state = {modal: false};
    this.toggle = this.toggle.bind(this);
  };

  toggle () {
    this.setState({modal: !this.state.modal});
  };

  render () {
    return (
      <Col className="snack-col" lg="4" md="6">
        <Card className="snack-card" onClick={this.toggle}>
          <CardImg className="snack-img" top width="100%" src={this.props.img} alt={this.props.name} />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>{this.props.price} Credits</CardSubtitle>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="snack-modal" centered>
          <Row>
            <Col xs="5">
              <img className="modal-img" src={this.props.img} alt={this.props.name} />
            </Col>
            <Col xs="7">
              <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
              <ModalBody>
                <h5>{this.props.price} Credits</h5>
                <p>{this.props.description}</p>
                <Reviews snackId={this.props.id} />
              </ModalBody>
            </Col>
          </Row>
        </Modal>
      </Col>
    );
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(Snack);
