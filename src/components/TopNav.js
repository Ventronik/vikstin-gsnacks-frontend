import React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogout } from '../actions/auth';

class TopNav extends React.Component {
  render () {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Vikstin Federal Penitentiary</NavbarBrand>
            {this.props.authorized ?
              (
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <a href="/" className="nav-link" onClick={() => this.props.userLogout()}>Log Out</a>
                  </NavItem>
                </Nav>
              ) : (
                 <Nav className="ml-auto" navbar>
                   <NavItem>
                     <a href="/login" className="nav-link">Log In</a>
                   </NavItem>
                   <NavItem>
                     <a href="/signup" className="nav-link">Sign Up</a>
                   </NavItem>
                 </Nav>
               )
            }
        </Navbar>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({ userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
