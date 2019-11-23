import React from "react";
import Moment from "react-moment";

const FormattedDateField = ({ source, record }) => (
  <Moment format="DD/MM/YYYY">{record[source]}</Moment>
);

FormattedDateField.defaultProps = {
  addLabel: true
};

export default FormattedDateField;
