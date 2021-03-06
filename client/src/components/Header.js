import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import LoginButton from './LoginButton';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <LoginButton />;
      default:
        return (
          <Nav.Item>
            {`Welcome Back, ${this.props.auth.displayName}`}
            <Button
              href="/api/logout"
              variant="outline-danger"
              style={{ margin: '0px 10px' }}
            >
              Logout
            </Button>
          </Nav.Item>
        );
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
