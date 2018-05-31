import React from 'react';

import { Button, Form, FormGroup, Container, Row, Col, Alert, Input } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin } from '../actions/auth';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.userLogin(this.state, this.props.history);
  };

  render () {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '15vh' }}>
          <Col
            lg={{ size: 4, offset: 4 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}
          >
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={event => this.setState({email: event.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={event => this.setState({password: event.target.value})}
                />
              </FormGroup>
              {this.props.showLoginError ? (
                <Alert color="danger">
                  Email or password is incorrect.
                </Alert>
              ) : null}
              <Button className="mr-3" type="submit" color="primary">
                Submit
              </Button>
              <a href="/signup">Not a member?</a>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
};

const mapStateToProps = state => ({showLoginError: state.auth.showLoginError});

const mapDispatchToProps = dispatch => ({userLogin: bindActionCreators(userLogin, dispatch)});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
