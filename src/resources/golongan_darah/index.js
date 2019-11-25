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

const CreateGolonganDarah = ({ ...rest }) => (
  <Create {...rest} title="Golongan Darah">
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

const EditGolonganDarah = ({ ...rest }) => (
  <Edit {...rest} title="Golongan Darah">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
    </SimpleForm>
  </Edit>
);

const ListGolonganDarah = ({ ...rest }) => (
  <List {...rest} title="Golongan Darah" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <TextField source="nama" label="Nama" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreateGolonganDarah,
  edit: EditGolonganDarah,
  list: ListGolonganDarah
};
