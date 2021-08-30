import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "semantic-ui-react"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
    size="mini"
    color="red"
      className="btn btn-primary btn-block"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default LoginButton;