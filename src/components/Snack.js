import React from 'react';

import { Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
      <Col className="snack-col" xs="4">
        <Card className="snack-card" onClick={this.toggle}>
          <CardImg className="snack-img" top width="100%" src={this.props.img} alt={this.props.name} />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>{this.props.price} Credits</CardSubtitle>
            <CardText>{this.props.description.slice(0,50)}...</CardText>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
          <ModalBody>
            <img className="modal-img" src={this.props.img} alt={this.props.name} />
            <small>{this.props.price} Credits</small>
            <p>{this.props.description}</p>
          </ModalBody>
        </Modal>
      </Col>
    );
  };
};

const mapStateToProps = state => ({snack: state.snacks.snack});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Snack);
