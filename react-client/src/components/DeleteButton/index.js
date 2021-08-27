import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {  Button } from 'semantic-ui-react';

const DeleteButton = () => {
  const { user } = useAuth0();
  return (
    <button>
      Delete
    </button>
  );
};

export default DeleteButton;