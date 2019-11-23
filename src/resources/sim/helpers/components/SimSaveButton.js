import React, { useCallback } from "react";
import { SaveButton } from "react-admin";
import { useForm } from "react-final-form";
import { mockDataServer } from "../../../../providers/data";

const SimSaveButton = ({ handleSubmitWithRedirect, ...rest }) => {
  const form = useForm();

  const handleClick = useCallback(() => {
    mockDataServer
      .getList("personel", {
        pagination: { page: 1, perPage: 1 },
        sort: { field: "id", order: "ASC" },
        filter: {
          nrp_nip: form.getFieldState("nrp_nip").value
        }
      })
      .then(res => {
        form.change("personel_id", res.data[0].id);
        handleSubmitWithRedirect("list");
      });
  }, [form, handleSubmitWithRedirect]);

  return <SaveButton {...rest} handleSubmitWithRedirect={handleClick} />;
};

export default SimSaveButton;
