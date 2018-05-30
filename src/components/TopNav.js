import React from 'react'

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userLogout } from '../actions/auth.actions'

class TopNav extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Vikstin Federal Penitentiary</NavbarBrand>
            {this.props.user.name ?
              (
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <a href="/" className="nav-link" onClick={() => this.props.logout()}>Log Out</a>
                  </NavItem>
                </Nav>
              ) : (
                 <Nav className="ml-auto" navbar>
                   <NavItem>
                     <a href="/login" className="nav-link">Login</a>
                   </NavItem>
                   <NavItem>
                     <a href="/signup" className="nav-link">Signup</a>
                   </NavItem>
                 </Nav>
               )
            }
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => ({user: state.auth.user})
const mapDispatchToProps = dispatch => ({logout: bindActionCreators(userLogout, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(TopNav)
