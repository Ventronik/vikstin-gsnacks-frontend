import React, { Component } from 'react';

import { Button, Form, FormGroup, Alert, Input, Modal, ModalBody, ModalFooter } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSignup } from '../actions/auth';

class Signup extends Component {
  state = {
    invalid: false,
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    verify_password: ''
  };

  userSignup = event => {
    event.preventDefault();
    let { first_name, last_name, email, password, verify_password } = this.state;
    if (!password || password !== verify_password || !verify_password) {
      this.setState({
        invalid: true
      });
    } else {
      let newUser = {first_name, last_name, email, password};
      this.props.userSignup(newUser, this.props.history);
    }
  };

  render () {
    return (
      <div className="welcome-container">
        <Modal className="welcome-modal" isOpen="true" centered="true">
          <Form onSubmit={this.userSignup}>
            <ModalBody>
              <FormGroup>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={event => this.setState({ first_name: event.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={event => this.setState({ last_name: event.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={event => this.setState({ email: event.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={event => this.setState({ password: event.target.value })}
                  invalid={this.state.invalid}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="verify_password"
                  placeholder="Verify Password"
                  value={this.state.verify_password}
                  onChange={event => this.setState({ verify_password: event.target.value })}
                  invalid={this.state.invalid}
                />
              </FormGroup>
              {this.state.invalid ? (
                <Alert color="danger">Please fill out all fields correctly.</Alert>
              ) : null}
            </ModalBody>
            <ModalFooter>
              <Button type="submit" color="primary">
                Submit
              </Button>
              <a href="/login">Already a member?</a>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({userSignup: bindActionCreators(userSignup, dispatch)});

export default connect(null, mapDispatchToProps)(Signup);
