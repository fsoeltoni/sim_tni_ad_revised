import React from "react";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  FormDataConsumer,
  Edit,
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  DeleteButton
} from "react-admin";
import moment from "moment";

const CreateKesatuan = ({ ...rest }) => (
  <Create {...rest} title="Kesatuan">
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
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.kecabangan_id && (
            <ReferenceInput
              source="korps_id"
              label="Korps"
              reference="korps"
              sort={{ field: "id", order: "ASC" }}
              filter={{ kecabangan_id: formData.kecabangan_id }}
              {...rest}
            >
              <SelectInput optionText="kode" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
    </SimpleForm>
  </Create>
);

const EditKesatuan = ({ ...rest }) => (
  <Edit {...rest} title="Kesatuan">
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
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.kecabangan_id && (
            <ReferenceInput
              source="korps_id"
              label="Korps"
              reference="korps"
              sort={{ field: "id", order: "ASC" }}
              filter={{ kecabangan_id: formData.kecabangan_id }}
              {...rest}
            >
              <SelectInput optionText="kode" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <TextInput source="nama" label="Nama" />
      <TextInput source="kode" label="Kode" />
    </SimpleForm>
  </Edit>
);

const ListKesatuan = ({ ...rest }) => (
  <List {...rest} title="Kesatuan" sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <ReferenceField
        source="kecabangan_id"
        label="Kecabangan"
        reference="kecabangan"
      >
        <TextField source="kode" />
      </ReferenceField>
      <ReferenceField source="korps_id" label="Korps" reference="korps">
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
  create: CreateKesatuan,
  edit: EditKesatuan,
  list: ListKesatuan
};
