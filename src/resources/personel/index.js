import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  Edit,
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import moment from "moment";

const CreatePersonel = ({ ...rest }) => (
  <Create {...rest} title="Personel">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
      <DateInput source="tanggal_lahir" label="Tanggal Lahir" />
      <TextInput source="nrp_nip" label="NRP/NIP" />
    </SimpleForm>
  </Create>
);

const EditPersonel = ({ ...rest }) => (
  <Edit {...rest} title="Personel">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
      <DateInput source="tanggal_lahir" label="Tanggal Lahir" />
      <TextInput source="nrp_nip" label="NRP/NIP" />
    </SimpleForm>
  </Edit>
);

const ListPersonel = ({ ...rest }) => (
  <List {...rest} title="Personel" sort={{ field: "created", order: "DESC" }}>
    <Datagrid>
      <TextField source="nama" label="Nama" />
      <TextField source="nrp_nip" label="NRP/NIP" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreatePersonel,
  edit: EditPersonel,
  list: ListPersonel
};
