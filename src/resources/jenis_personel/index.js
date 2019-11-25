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

const CreateJenisPersonel = ({ ...rest }) => (
  <Create {...rest} title="Jenis Personel">
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

const EditJenisPersonel = ({ ...rest }) => (
  <Edit {...rest} title="Jenis Personel">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
    </SimpleForm>
  </Edit>
);

const ListJenisPersonel = ({ ...rest }) => (
  <List {...rest} title="Jenis Personel" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <TextField source="nama" label="Nama" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreateJenisPersonel,
  edit: EditJenisPersonel,
  list: ListJenisPersonel
};
