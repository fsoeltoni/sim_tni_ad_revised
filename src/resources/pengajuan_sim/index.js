import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  Edit,
  List,
  Datagrid,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import moment from "moment";

const CreatePengajuanSim = ({ ...rest }) => (
  <Create {...rest} title="Pengajuan SIM">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
      <NumberInput source="kode" label="Kode" />
    </SimpleForm>
  </Create>
);

const EditPengajuanSim = ({ ...rest }) => (
  <Edit {...rest} title="Pengajuan SIM">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
      <NumberInput source="kode" label="Kode" />
    </SimpleForm>
  </Edit>
);

const ListPengajuanSim = ({ ...rest }) => (
  <List {...rest} title="Pengajuan SIM" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <TextField source="nama" label="Nama" />
      <TextField source="kode" label="Kode" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreatePengajuanSim,
  edit: EditPengajuanSim,
  list: ListPengajuanSim
};
