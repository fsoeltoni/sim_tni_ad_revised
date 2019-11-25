import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
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

const CreateKotaKabupaten = ({ ...rest }) => (
  <Create {...rest} title="Kota/Kabupaten">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
    >
      <ReferenceInput
        source="provinsi_id"
        label="Provinsi"
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
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
    </SimpleForm>
  </Create>
);

const EditKotaKabupaten = ({ ...rest }) => (
  <Edit {...rest} title="Kota/Kabupaten">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <ReferenceInput
        source="provinsi_id"
        label="Provinsi"
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
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
    </SimpleForm>
  </Edit>
);

const ListKotaKabupaten = ({ ...rest }) => (
  <List {...rest} title="Kota/Kabupaten" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <ReferenceField
        source="provinsi_id"
        label="Provinsi"
        reference="provinsi"
      >
        <TextField source="nama" />
      </ReferenceField>
      <ReferenceField
        source="jenis_kota_kabupaten_id"
        label="Jenis Kota/Kabupaten"
        reference="jenis_kota_kabupaten"
      >
        <TextField source="nama" />
      </ReferenceField>

      <TextField source="nama" label="Nama" />
      <TextField source="kode" label="Kode" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreateKotaKabupaten,
  edit: EditKotaKabupaten,
  list: ListKotaKabupaten
};
