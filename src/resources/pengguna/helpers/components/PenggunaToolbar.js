import React from "react";
import { Toolbar } from "react-admin";
import PenggunaSaveButton from "./PenggunaSaveButton";

const PenggunaToolbar = ({ ...rest }) => (
  <Toolbar {...rest}>
    <PenggunaSaveButton />
  </Toolbar>
);

export default PenggunaToolbar;
