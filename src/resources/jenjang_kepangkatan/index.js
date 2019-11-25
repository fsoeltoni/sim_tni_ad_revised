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

const CreateJenjangKepangkatan = ({ ...rest }) => (
  <Create {...rest} title="Jenjang Kepangkatan">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
    >
      <ReferenceInput
        source="pendahulu_id"
        label="Pendahulu"
        reference="jenjang_kepangkatan"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <TextInput source="nama" label="Nama" />
    </SimpleForm>
  </Create>
);

const EditJenjangKepangkatan = ({ ...rest }) => (
  <Edit {...rest} title="Jenjang Kepangkatan">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <ReferenceInput
        source="pendahulu_id"
        label="Pendahulu"
        reference="jenjang_kepangkatan"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <TextInput source="nama" label="Nama" />
    </SimpleForm>
  </Edit>
);

const ListJenjangKepangkatan = ({ ...rest }) => (
  <List
    {...rest}
    title="Jenjang Kepangkatan"
    sort={{ field: "id", order: "ASC" }}
  >
    <Datagrid>
      <ReferenceField
        source="pendahulu_id"
        label="Pendahulu"
        reference="jenjang_kepangkatan"
      >
        <TextField source="nama" />
      </ReferenceField>
      <TextField source="nama" label="Nama" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreateJenjangKepangkatan,
  edit: EditJenjangKepangkatan,
  list: ListJenjangKepangkatan
};
