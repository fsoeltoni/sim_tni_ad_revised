import React, { useCallback } from "react";
import { SaveButton } from "react-admin";
import { useForm } from "react-final-form";
import { mockDataServer } from "../../../../providers/data";

const convertFileToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file.rawFile);

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

const SimSaveButton = ({ handleSubmitWithRedirect, ...rest }) => {
  const form = useForm();
  const redirect = (basePath, id, data) => `${basePath}/print/${id}`;

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
        handleSubmitWithRedirect(redirect);
      });

    const sidik_jari = form.getFieldState("sidik_jari").value[0];

    convertFileToBase64(sidik_jari).then(res =>
      form.change("sidik_jari.0.src", res)
    );
  }, [form, handleSubmitWithRedirect]);

  return <SaveButton {...rest} handleSubmitWithRedirect={handleClick} />;
};

export default SimSaveButton;
