import React, { Component } from 'react';
import { Button, Form, FormGroup, Container, Row, Col, Alert, Input } from 'reactstrap';

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
      console.log('newUser', newUser);
      this.props.userSignup(newUser, this.props.history);
    }
  };

  render () {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form onSubmit={this.userSignup}>
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
                <Alert className="alert" color="danger">Please fill out all fields correctly.</Alert>
              ) : null}
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
};

const mapDispatchToProps = dispatch => ({userSignup: bindActionCreators(userSignup, dispatch)});

export default connect(null, mapDispatchToProps)(Signup);
