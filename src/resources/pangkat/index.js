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
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import moment from "moment";

const CreatePangkat = ({ ...rest }) => (
  <Create {...rest} title="Pangkat">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
    >
      <ReferenceInput
        source="jenjang_kepangkatan_id"
        label="Jenjang Kepangkatan"
        reference="jenjang_kepangkatan"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <ReferenceInput
        source="pendahulu_id"
        label="Pendahulu"
        reference="pangkat"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="kode" />
      </ReferenceInput>
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
    </SimpleForm>
  </Create>
);

const EditPangkat = ({ ...rest }) => (
  <Edit {...rest} title="Pangkat">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <ReferenceInput
        source="jenjang_kepangkatan_id"
        label="Jenjang Kepangkatan"
        reference="jenjang_kepangkatan"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <ReferenceInput
        source="pendahulu_id"
        label="Pendahulu"
        reference="pangkat"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="kode" />
      </ReferenceInput>
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
    </SimpleForm>
  </Edit>
);

const ListPangkat = ({ ...rest }) => (
  <List {...rest} title="Pangkat" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <ReferenceField
        source="jenjang_kepangkatan_id"
        label="Jenjang Kepangkatan"
        reference="jenjang_kepangkatan"
      >
        <TextField source="nama" />
      </ReferenceField>
      <ReferenceField
        source="pendahulu_id"
        label="Pendahulu"
        reference="pangkat"
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
  create: CreatePangkat,
  edit: EditPangkat,
  list: ListPangkat
};
