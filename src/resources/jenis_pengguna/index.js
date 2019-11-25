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

const CreateJenisPengguna = ({ ...rest }) => (
  <Create {...rest} title="Jenis Pengguna">
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

const EditJenisPengguna = ({ ...rest }) => (
  <Edit {...rest} title="Jenis Pengguna">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
    </SimpleForm>
  </Edit>
);

const ListJenisPengguna = ({ ...rest }) => (
  <List {...rest} title="Jenis Pengguna" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <TextField source="nama" label="Nama" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreateJenisPengguna,
  edit: EditJenisPengguna,
  list: ListJenisPengguna
};
