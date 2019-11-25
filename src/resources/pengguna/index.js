import React from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  ReferenceInput,
  SelectInput,
  FormDataConsumer,
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
      <ReferenceInput
        source="lingkup_id"
        label="Lingkup"
        reference="lingkup"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.lingkup_id && (
            <ReferenceInput
              source="penyelenggara_id"
              label="Penyelenggara"
              reference="penyelenggara"
              sort={{ field: "id", order: "ASC" }}
              filter={{ lingkup_id: formData.lingkup_id }}
              {...rest}
            >
              <SelectInput optionText="kode" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <ReferenceInput
        source="jenis_pengguna_id"
        label="Jenis Pengguna"
        reference="jenis_pengguna"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
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
      <ReferenceInput
        source="lingkup_id"
        label="Lingkup"
        reference="lingkup"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.lingkup_id && (
            <ReferenceInput
              source="penyelenggara_id"
              label="Penyelenggara"
              reference="penyelenggara"
              sort={{ field: "id", order: "ASC" }}
              filter={{ lingkup_id: formData.lingkup_id }}
              {...rest}
            >
              <SelectInput optionText="kode" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <ReferenceInput
        source="jenis_pengguna_id"
        label="Jenis Pengguna"
        reference="jenis_pengguna"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <NumberInput source="nrp_nip" label="NRP/NIP" validate={validateNrpNip} />
      <TextInput source="sandi" label="Sandi" />
    </SimpleForm>
  </Edit>
);

const ListPengguna = ({ ...rest }) => (
  <List {...rest} title="Pengguna" sort={{ field: "created", order: "DESC" }}>
    <Datagrid>
      <ReferenceField source="lingkup_id" label="Lingkup" reference="lingkup">
        <TextField source="nama" />
      </ReferenceField>
      <ReferenceField
        source="penyelenggara_id"
        label="Penyelenggara"
        reference="penyelenggara"
      >
        <TextField source="kode" />
      </ReferenceField>
      <ReferenceField
        source="jenis_pengguna_id"
        label="Jenis Pengguna"
        reference="jenis_pengguna"
      >
        <TextField source="nama" />
      </ReferenceField>
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
