import React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogout } from '../actions/auth';

class Header extends React.Component {
  render () {
    return (
      <div>
        <Navbar color="dark" dark expand="md" fixed="top">
          <NavbarBrand href="/">
            <img src="./logo.svg" alt="Vikstin Federal Penitentiary" /> V.F.P.
          </NavbarBrand>
            {
              this.props.authorized ? (
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className="nav-link" disabled>Hello, #452{this.props.user.id}</NavLink>
                </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" disabled> &bull; </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/snacks" className="nav-link">Snacks</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/" className="nav-link" onClick={() => this.props.userLogout()}>Log Out</NavLink>
                  </NavItem>
                </Nav>
              ) : (
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/login" className="nav-link">Log In</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/signup" className="nav-link">Sign Up</NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
