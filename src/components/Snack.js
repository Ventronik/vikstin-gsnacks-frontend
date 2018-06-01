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
      <Col className="snack-col" lg="4" md="6">
        <Card className="snack-card" onClick={this.toggle}>
          <CardImg className="snack-img" top width="100%" src={this.props.img} alt={this.props.name} />
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardSubtitle>{this.props.price} Credits</CardSubtitle>
            <CardText>{this.props.description.slice(0,50)}...</CardText>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className="snack-modal" centered="true">
          <Row>
            <Col xs="5">
              <img className="modal-img" src={this.props.img} alt={this.props.name} />
            </Col>
            <Col xs="7">
              <ModalHeader toggle={this.toggle}>{this.props.name}</ModalHeader>
              <ModalBody>
                <h5>{this.props.price} Credits</h5>
                {/* <p>{this.props.description}</p> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
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
