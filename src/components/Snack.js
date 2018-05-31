import React from 'react';

import { Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody } from 'reactstrap';

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
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="snack-modal">
          <Row>
            <Col xs="5">
              <img className="modal-img" src={this.props.img} alt={this.props.name} />
            </Col>
            <Col xs="7">
              <ModalHeader toggle={this.toggle}></ModalHeader>
              <ModalBody>
                <h3>{this.props.name}</h3>
                <h5>{this.props.price} Credits</h5>
                <p>{this.props.description}</p>
              </ModalBody>
            </Col>
          </Row>
        </Modal>
      </Col>
    );
  };
};

const mapStateToProps = state => ({snack: state.snacks.snack});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Snack);
