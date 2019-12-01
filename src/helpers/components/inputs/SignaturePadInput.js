import React from "react";
import { Field } from "react-final-form";
import SignaturePadComponent from "./components/SignaturePadComponent";

const SignaturePadInput = () => {
  return <Field name="tanda_tangan" component={SignaturePadComponent} />;
};

export default SignaturePadInput;
