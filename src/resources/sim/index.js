import React from "react";
import moment from "moment";
import {
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ImageInput,
  ImageField,
  Edit,
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton,
  TabbedForm,
  FormTab
} from "react-admin";
import FormattedDateField from "../../helpers/components/FormattedDateField";
import SimToolbar from "./helpers/components/SimToolbar";
import validateNrpNip from "../../helpers/components/validations/validateNrpNip";
import BarcodeReader from "react-barcode-reader";
import CameraInput from "../../helpers/input/CameraInput";
import SignaturePadInput from "../../helpers/input/SignaturePadInput";

const CreateSim = ({ permissions, ...rest }) =>
  permissions ? (
    <Create {...rest} title="SIM">
      <TabbedForm
        initialValues={{
          created: moment(),
          updated: moment(),
          berlaku_hingga: moment().add(5, "y"),
          lingkup_id: permissions.lingkup_id,
          penyelenggara_id: permissions.penyelenggara_id,
          pengguna_id: permissions.id
        }}
        toolbar={<SimToolbar />}
        variant="outlined"
      >
        <FormTab label="Keterangan">
          <ReferenceInput
            source="pengajuan_sim_id"
            label="Pengajuan SIM"
            reference="pengajuan_sim"
            sort={{ field: "id", order: "ASC" }}
          >
            <SelectInput optionText="nama" />
          </ReferenceInput>
          <ReferenceInput
            source="golongan_sim_id"
            label="Golongan SIM"
            reference="golongan_sim"
            sort={{ field: "id", order: "ASC" }}
          >
            <SelectInput optionText="nama" />
          </ReferenceInput>
          <NumberInput
            source="nrp_nip"
            label="NRP/NIP"
            validate={validateNrpNip}
          />
        </FormTab>
        <FormTab label="Sidik Jari">
          <ImageInput
            source="sidik_jari"
            label="Sidik Jari"
            accept="image/*"
            multiple={true}
            placeholder={<p>Pilih Sidik Jari</p>}
          >
            <ImageField source="src" title="title" />
          </ImageInput>
        </FormTab>
        <FormTab label="Pas Foto">
          <CameraInput />
        </FormTab>
        <FormTab label="Tanda Tangan">
          <SignaturePadInput />
        </FormTab>
      </TabbedForm>
    </Create>
  ) : null;

const EditSim = ({ permissions, ...rest }) =>
  permissions ? (
    <Edit {...rest} title="SIM">
      <SimpleForm
        initialValues={{
          updated: moment(),
          lingkup_id: permissions.lingkup_id,
          penyelenggara_id: permissions.penyelenggara_id,
          pengguna_id: permissions.id
        }}
        toolbar={<SimToolbar />}
      >
        <ReferenceInput
          source="pengajuan_sim_id"
          label="Pengajuan SIM"
          reference="pengajuan_sim"
          sort={{ field: "id", order: "ASC" }}
        >
          <SelectInput optionText="nama" />
        </ReferenceInput>
        <ReferenceInput
          source="golongan_sim_id"
          label="Golongan SIM"
          reference="golongan_sim"
          sort={{ field: "id", order: "ASC" }}
        >
          <SelectInput optionText="nama" />
        </ReferenceInput>
        <NumberInput
          source="nrp_nip"
          label="NRP/NIP"
          validate={validateNrpNip}
        />
        <ImageInput
          source="sidik_jari"
          label="Sidik Jari"
          accept="image/*"
          multiple={true}
          placeholder={<p>Pilih Sidik Jari</p>}
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <ImageInput
          source="pas_foto"
          label="Pas Foto"
          accept="image/*"
          multiple={false}
          placeholder={<p>Pilih Pas Foto</p>}
        >
          <ImageField source="src" title="title" />
        </ImageInput>
        <SignaturePadInput />
      </SimpleForm>
    </Edit>
  ) : null;

const ListSim = ({ permissions, ...rest }) => {
  return permissions ? (
    <div>
      <BarcodeReader
        onError={error => console.log(error)}
        onScan={scan => console.log(scan)}
      />
      <List
        {...rest}
        title="SIM"
        sort={{ field: "created", order: "DESC" }}
        filterDefaultValues={{ penyelenggara_id: permissions.penyelenggara_id }}
      >
        <Datagrid>
          <FormattedDateField source="created" label="Dibuat" />
          <FormattedDateField source="berlaku_hingga" label="Berlaku Hingga" />
          <ReferenceField
            source="personel_id"
            label="Personel"
            reference="personel"
          >
            <TextField source="nama" />
          </ReferenceField>
          <ReferenceField
            source="pengajuan_sim_id"
            label="Pengajuan SIM"
            reference="pengajuan_sim"
          >
            <TextField source="nama" />
          </ReferenceField>
          <ReferenceField
            source="golongan_sim_id"
            label="Golongan SIM"
            reference="golongan_sim"
          >
            <TextField source="nama" />
          </ReferenceField>

          <EditButton />
          <DeleteButton />
        </Datagrid>
      </List>
    </div>
  ) : null;
};

export default {
  create: CreateSim,
  edit: EditSim,
  list: ListSim
};
