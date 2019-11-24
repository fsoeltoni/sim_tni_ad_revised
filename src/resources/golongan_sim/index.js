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

const CreateGolonganSim = ({ ...rest }) => (
  <Create {...rest} title="Golongan SIM">
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

const EditGolonganSim = ({ ...rest }) => (
  <Edit {...rest} title="Golongan SIM">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
    </SimpleForm>
  </Edit>
);

const ListGolonganSim = ({ ...rest }) => (
  <List {...rest} title="Golongan SIM" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <TextField source="nama" label="Nama" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreateGolonganSim,
  edit: EditGolonganSim,
  list: ListGolonganSim
};
