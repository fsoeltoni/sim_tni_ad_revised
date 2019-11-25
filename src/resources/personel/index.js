import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  FormDataConsumer,
  Edit,
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import moment from "moment";

const CreatePersonel = ({ ...rest }) => (
  <Create {...rest} title="Personel">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
      <DateInput source="tanggal_lahir" label="Tanggal Lahir" />
      <ReferenceInput
        source="jenis_personel_id"
        label="Jenis Personel"
        reference="jenis_personel"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <TextInput source="nrp_nip" label="NRP/NIP" />
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.jenis_personel_id &&
          formData.jenis_personel_id === 1 && (
            <ReferenceInput
              source="jenjang_kepangkatan_id"
              label="Jenjang Kepangkatan"
              reference="jenjang_kepangkatan"
              sort={{ field: "id", order: "ASC" }}
              {...rest}
            >
              <SelectInput optionText="nama" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.jenis_personel_id &&
          formData.jenis_personel_id === 1 &&
          formData.jenjang_kepangkatan_id && (
            <ReferenceInput
              source="pangkat_id"
              label="Pangkat"
              reference="pangkat"
              sort={{ field: "id", order: "ASC" }}
              filter={{
                jenjang_kepangkatan_id: formData.jenjang_kepangkatan_id
              }}
              {...rest}
            >
              <SelectInput optionText="nama" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.jenis_personel_id &&
          formData.jenis_personel_id === 1 &&
          formData.pangkat && (
            <ReferenceInput
              source="kecabangan_id"
              label="Kecabangan"
              reference="kecabangan"
              sort={{ field: "id", order: "ASC" }}
              {...rest}
            >
              <SelectInput optionText="kode" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.jenis_personel_id &&
          formData.jenis_personel_id === 1 &&
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
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.jenis_personel_id &&
          formData.jenis_personel_id === 1 &&
          formData.korps_id && (
            <ReferenceInput
              source="kesatuan_id"
              label="Kesatuan"
              reference="kesatuan"
              sort={{ field: "id", order: "ASC" }}
              filter={{ korps_id: formData.korps_id }}
              {...rest}
            >
              <SelectInput optionText="kode" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
    </SimpleForm>
  </Create>
);

const EditPersonel = ({ ...rest }) => (
  <Edit {...rest} title="Personel">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    >
      <TextInput source="nama" label="Nama" />
      <DateInput source="tanggal_lahir" label="Tanggal Lahir" />
      <ReferenceInput
        source="jenis_personel_id"
        label="Jenis Personel"
        reference="jenis_personel"
        sort={{ field: "id", order: "ASC" }}
      >
        <SelectInput optionText="nama" />
      </ReferenceInput>
      <TextInput source="nrp_nip" label="NRP/NIP" />
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.jenis_personel_id &&
          formData.jenis_personel_id === 1 && (
            <ReferenceInput
              source="jenjang_kepangkatan_id"
              label="Jenjang Kepangkatan"
              reference="jenjang_kepangkatan"
              sort={{ field: "id", order: "ASC" }}
              {...rest}
            >
              <SelectInput optionText="nama" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.jenis_personel_id &&
          formData.jenis_personel_id === 1 &&
          formData.jenjang_kepangkatan_id && (
            <ReferenceInput
              source="pangkat_id"
              label="Pangkat"
              reference="pangkat"
              sort={{ field: "id", order: "ASC" }}
              filter={{
                jenjang_kepangkatan_id: formData.jenjang_kepangkatan_id
              }}
              {...rest}
            >
              <SelectInput optionText="nama" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.jenis_personel_id &&
          formData.jenis_personel_id === 1 &&
          formData.pangkat_id && (
            <ReferenceInput
              source="kecabangan_id"
              label="Kecabangan"
              reference="kecabangan"
              sort={{ field: "id", order: "ASC" }}
              {...rest}
            >
              <SelectInput optionText="kode" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.jenis_personel_id &&
          formData.jenis_personel_id === 1 &&
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
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.jenis_personel_id &&
          formData.jenis_personel_id === 1 &&
          formData.korps_id && (
            <ReferenceInput
              source="kesatuan_id"
              label="Kesatuan"
              reference="kesatuan"
              sort={{ field: "id", order: "ASC" }}
              filter={{ korps_id: formData.korps_id }}
              {...rest}
            >
              <SelectInput optionText="kode" />
            </ReferenceInput>
          )
        }
      </FormDataConsumer>
    </SimpleForm>
  </Edit>
);

const ListPersonel = ({ ...rest }) => (
  <List {...rest} title="Personel" sort={{ field: "created", order: "DESC" }}>
    <Datagrid>
      <ReferenceField
        source="jenis_personel_id"
        label="Jenis Personel"
        reference="jenis_personel"
      >
        <TextField source="nama" />
      </ReferenceField>
      <TextField source="nama" label="Nama" />
      <TextField source="nrp_nip" label="NRP/NIP" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default {
  create: CreatePersonel,
  edit: EditPersonel,
  list: ListPersonel
};
