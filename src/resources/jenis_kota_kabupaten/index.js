import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  Edit,
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import moment from "moment";

const CreateJenisKotaKabupaten = ({ ...rest }) => (
  <Create {...rest} title="Jenis Kota/Kabupaten">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
    </SimpleForm>
  </Create>
);

const EditJenisKotaKabupaten = ({ ...rest }) => (
  <Edit {...rest} title="Jenis Kota/Kabupaten">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
    </SimpleForm>
  </Edit>
);

const ListJenisKotaKabupaten = ({ ...rest }) => (
  <List
    {...rest}
    title="Jenis Kota/Kabupaten"
    sort={{ field: "id", order: "ASC" }}
  >
    <Datagrid>
      <TextField source="nama" label="Nama" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreateJenisKotaKabupaten,
  edit: EditJenisKotaKabupaten,
  list: ListJenisKotaKabupaten
};
