import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  FormDataConsumer,
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
      <ReferenceInput
        source="provinsi_markas_id"
        label="Provinsi Markas"
        reference="provinsi"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="kode" />
      </ReferenceInput>
      <ReferenceInput
        source="jenis_kota_kabupaten_id"
        label="Jenis Kota/Kabupaten"
        reference="jenis_kota_kabupaten"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.provinsi_markas_id &&
          formData.jenis_kota_kabupaten_id && (
            <ReferenceInput
              source="markas_id"
              label="Markas"
              reference="kota_kabupaten"
              sort={{ field: "id", order: "ASC" }}
              {...rest}
            >
              <SelectInput optionText="nama" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
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
      <ReferenceInput
        source="provinsi_markas_id"
        label="Provinsi Markas"
        reference="provinsi"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="kode" />
      </ReferenceInput>
      <ReferenceInput
        source="jenis_kota_kabupaten_id"
        label="Jenis Kota/Kabupaten"
        reference="jenis_kota_kabupaten"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.provinsi_markas_id &&
          formData.jenis_kota_kabupaten_id && (
            <ReferenceInput
              source="markas_id"
              label="Markas"
              reference="kota_kabupaten"
              sort={{ field: "id", order: "ASC" }}
              {...rest}
            >
              <SelectInput optionText="nama" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
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
      <ReferenceField
        source="markas_id"
        label="Markas"
        reference="kota_kabupaten"
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
