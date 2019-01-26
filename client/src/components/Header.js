import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Button href="/auth/google" variant="outline-dark">
            <img
              alt="google-login"
              src="http://pluspng.com/img-png/google-logo-png-google-logo-icon-png-transparent-background-1000.png"
              width="20"
              style={{ padding: '0 5px 0 0' }}
            />
            Login with Google
          </Button>
        );
      default:
        return [
          <NavDropdown
            key="dropdown"
            title={`Welcome Back, ${this.props.auth.displayName}`}
          >
            <LinkContainer to="/settings">
              <NavDropdown.Item>Account Settings</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/api/logout" style={{ color: '#dc3545' }}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>,
        ];
    }
  };

  render() {
    return (
      <Navbar collapseOnSelect bg="light" expand="lg">
        <LinkContainer to={this.props.auth ? '/dashboard' : '/'}>
          <Navbar.Brand>Note to Self</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" />
          {this.renderContent()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
