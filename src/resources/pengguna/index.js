import React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  TextInput,
  Edit,
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import moment from "moment";
import validateNrpNip from "../../helpers/components/validations/validateNrpNip";
import PenggunaToolbar from "./helpers/components/PenggunaToolbar";

const CreatePengguna = ({ ...rest }) => (
  <Create {...rest} title="Pengguna">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
      toolbar={<PenggunaToolbar />}
    >
      <NumberInput source="nrp_nip" label="NRP/NIP" validate={validateNrpNip} />
      <TextInput source="sandi" label="Sandi" />
    </SimpleForm>
  </Create>
);

const EditPengguna = ({ ...rest }) => (
  <Edit {...rest} title="Pengguna">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
      toolbar={<PenggunaToolbar />}
    >
      <NumberInput source="nrp_nip" label="NRP/NIP" validate={validateNrpNip} />
      <TextInput source="sandi" label="Sandi" />
    </SimpleForm>
  </Edit>
);

const ListPengguna = ({ ...rest }) => (
  <List {...rest} title="Pengguna" sort={{ field: "created", order: "DESC" }}>
    <Datagrid>
      <ReferenceField
        source="personel_id"
        label="Personel"
        reference="personel"
      >
        <TextField source="nama" />
      </ReferenceField>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreatePengguna,
  edit: EditPengguna,
  list: ListPengguna
};
