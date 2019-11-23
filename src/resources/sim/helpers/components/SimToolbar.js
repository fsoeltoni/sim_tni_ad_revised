import React from "react";
import { Toolbar } from "react-admin";
import SimSaveButton from "./SimSaveButton";

const SimToolbar = ({ ...rest }) => (
  <Toolbar {...rest}>
    <SimSaveButton />
  </Toolbar>
);

export default SimToolbar;
