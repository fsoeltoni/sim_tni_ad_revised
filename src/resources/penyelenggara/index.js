import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
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
import PenyelenggaraToolbar from "./helpers/components/PenyelenggaraToolbar";

const CreatePenyelenggara = ({ ...rest }) => (
  <Create {...rest} title="Penyelenggara">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
      toolbar={<PenyelenggaraToolbar />}
    >
      <ReferenceInput
        source="lingkup_id"
        label="Lingkup"
        reference="lingkup"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
      <NumberInput
        source="nrp_nip_komandan_id"
        label="NRP/NIP Komandan"
        validate={validateNrpNip}
      />
    </SimpleForm>
  </Create>
);

const EditPenyelenggara = ({ ...rest }) => (
  <Edit {...rest} title="Penyelenggara">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
      toolbar={<PenyelenggaraToolbar />}
    >
      <ReferenceInput
        source="lingkup_id"
        label="Lingkup"
        reference="lingkup"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
      <NumberInput
        source="nrp_nip_komandan_id"
        label="NRP/NIP Komandan"
        validate={validateNrpNip}
      />
    </SimpleForm>
  </Edit>
);

const ListPenyelenggara = ({ ...rest }) => (
  <List {...rest} title="Penyelenggara" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <ReferenceField source="lingkup_id" label="Lingkup" reference="lingkup">
        <TextField source="nama" />
      </ReferenceField>
      <TextField source="kode" label="Kode" />
      <ReferenceField
        source="komandan_id"
        label="Komandan"
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
  create: CreatePenyelenggara,
  edit: EditPenyelenggara,
  list: ListPenyelenggara
};
