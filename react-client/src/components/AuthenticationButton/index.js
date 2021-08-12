import React from "react";
import { LoginButton, LogoutButton, SignupButton } from "../";
import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <><LoginButton /> <SignupButton /></>;
};

export default AuthenticationButton;