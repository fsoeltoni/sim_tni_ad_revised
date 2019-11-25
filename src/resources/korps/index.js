import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Edit,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  DeleteButton
} from "react-admin";
import moment from "moment";

const CreateKorps = ({ ...rest }) => (
  <Create {...rest} title="Korps">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
    >
      <ReferenceInput
        source="kecabangan_id"
        label="Kecabangan"
        reference="kecabangan"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
    </SimpleForm>
  </Create>
);

const EditKorps = ({ ...rest }) => (
  <Edit {...rest} title="Korps">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <ReferenceInput
        source="kecabangan_id"
        label="Kecabangan"
        reference="kecabangan"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
    </SimpleForm>
  </Edit>
);

const ListKorps = ({ ...rest }) => (
  <List {...rest} title="Korps" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <ReferenceField
        source="kecabangan_id"
        label="Kecabangan"
        reference="kecabangan"
      >
        <TextField source="kode" />
      </ReferenceField>
      <TextField source="nama" label="Nama" />
      <TextField source="kode" label="Kode" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreateKorps,
  edit: EditKorps,
  list: ListKorps
};
