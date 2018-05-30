import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../actions/auth.actions'

export class Signup extends Component {
  state = {
    isValid: true,
    passwordClasses: 'form-control',
    name: '',
    email: '',
    company: '',
    phone: '',
    address: '',
    password: '',
    verify_password: ''
  }
  userSignup = e => {
    e.preventDefault()
    let { name, email, company, phone, password, verify_password, address } = this.state
    if (!password || password !== verify_password || !verify_password) {
      this.setState({
        passwordClasses: this.state.passwordClasses + ' is-invalid',
        isValid: false
      })
    } else {
      let newUser = {name, email, company, phone, password, address}
      console.log('newUser', newUser)
      this.props.userSignup(newUser, this.props.history)
    }
  }

  render() {
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
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name-field"
                  placeholder="name"
                  value={this.state.name}
                  onChange={e =>
                    this.setState({ name: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="email"
                  value={this.state.email}
                  onChange={e =>
                    this.setState({ email: e.target.value })
                  }
                />
              </FormGroup>
               <FormGroup>
                <Label for="company">Company</Label>
                <Input
                  type="text"
                  name="company"
                  id="company-field"
                  placeholder="company"
                  value={this.state.company}
                  onChange={e =>
                    this.setState({ company: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="name">Phone</Label>
                <Input
                  type="text"
                  name="phone"
                  id="phone-field"
                  placeholder="phone"
                  value={this.state.phone}
                  onChange={e =>
                    this.setState({ phone: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="address-field"
                  placeholder="address"
                  value={this.state.address}
                  onChange={e =>
                    this.setState({ address: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password-field"
                  placeholder="password"
                  value={this.state.password}
                  onChange={e =>
                    this.setState({ password: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="verify_password">Verify Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="verify_password"
                  placeholder="password"
                  value={this.state.verify_password}
                  onChange={e =>
                    this.setState({ verify_password: e.target.value })
                  }
                />
                {!this.state.isValid ? (
                  <Alert color="danger">Passwords do not match</Alert>
                ) : null}
              </FormGroup>
              <Button color="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Signup)
