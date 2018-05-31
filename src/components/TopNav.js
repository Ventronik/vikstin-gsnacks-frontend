import React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUser, userLogout } from '../actions/auth';

class TopNav extends React.Component {
  componentDidMount () {
    this.props.getUser();
  };

  render () {
    return (
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">Vikstin Federal Penitentiary</NavbarBrand>
            {this.props.user.id ?
              (
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <a href="/" className="nav-link" onClick={() => this.props.userLogout()}>Log Out</a>
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
    );
  };
};

const mapStateToProps = state => ({user: state.auth.user});

const mapDispatchToProps = dispatch => bindActionCreators({ getUser, userLogout }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
