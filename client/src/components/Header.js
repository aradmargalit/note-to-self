import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Navbar, Nav } from 'react-bootstrap';
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
          <Navbar.Text style={{ padding: '0 10px 0 0' }}>
            Welcome Back, {`${this.props.auth.displayName.split(' ')[0]}`}
          </Navbar.Text>,
          <Button href="/api/logout" variant="outline-danger">
            Log Out
          </Button>,
        ];
    }
  };

  render() {
    return (
      <Navbar bg="light" expand="lg">
        <LinkContainer to={this.props.auth ? '/surveys' : '/'}>
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
