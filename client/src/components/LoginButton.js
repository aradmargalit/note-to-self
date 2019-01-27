import React from 'react';
import { Button } from 'react-bootstrap';

const LoginButton = () => {
  return (
    <Button href="/auth/google" variant="outline-dark">
      <img
        alt="google-login"
        src="https://pluspng.com/img-png/google-logo-png-google-logo-icon-png-transparent-background-1000.png"
        width="20"
        style={{ padding: '0 5px 0 0' }}
      />
      Login with Google
    </Button>
  );
};

export default LoginButton;
