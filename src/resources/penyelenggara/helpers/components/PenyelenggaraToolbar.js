import React from "react";
import { Toolbar } from "react-admin";
import PenyelenggaraSaveButton from "./PenyelenggaraSaveButton";

const PenyelenggaraToolbar = ({ ...rest }) => (
  <Toolbar {...rest}>
    <PenyelenggaraSaveButton />
  </Toolbar>
);

export default PenyelenggaraToolbar;
