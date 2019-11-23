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

const CreatePenyelenggara = ({ ...rest }) => (
  <Create {...rest} title="Penyelenggara">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
    </SimpleForm>
  </Create>
);

const EditPenyelenggara = ({ ...rest }) => (
  <Edit {...rest} title="Penyelenggara">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
    </SimpleForm>
  </Edit>
);

const ListPenyelenggara = ({ ...rest }) => (
  <List {...rest} title="Penyelenggara" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <TextField source="nama" label="Nama" />
      <TextField source="kode" label="Kode" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreatePenyelenggara,
  edit: EditPenyelenggara,
  list: ListPenyelenggara
};
