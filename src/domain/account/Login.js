import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button onClick={loginWithRedirect}>Log in</Button>;
};

export default Login;
