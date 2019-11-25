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

const CreateJenisPomdam = ({ ...rest }) => (
  <Create {...rest} title="Jenis Pomdam">
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

const EditJenisPomdam = ({ ...rest }) => (
  <Edit {...rest} title="Jenis Pomdam">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
    </SimpleForm>
  </Edit>
);

const ListJenisPomdam = ({ ...rest }) => (
  <List {...rest} title="Jenis Pomdam" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <TextField source="nama" label="Nama" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreateJenisPomdam,
  edit: EditJenisPomdam,
  list: ListJenisPomdam
};
