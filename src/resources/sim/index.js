import React from "react";
import moment from "moment";
import {
  Create,
  SimpleForm,
  NumberInput,
  Edit,
  List,
  Datagrid,
  ReferenceField,
  TextField,
  EditButton,
  DeleteButton
} from "react-admin";
import FormattedDateField from "../../helpers/components/FormattedDateField";
import SimToolbar from "./helpers/components/SimToolbar";
import validateNrpNip from "../../helpers/components/validations/validateNrpNip";

const CreateSim = ({ permissions, ...rest }) =>
  permissions ? (
    <Create {...rest} title="SIM">
      <SimpleForm
        defaultValue={{
          created: moment(),
          updated: moment(),
          berlaku_hingga: moment().add(5, "y"),
          lingkup_id: permissions.lingkup_id,
          penyelenggara: permissions.penyelenggara_id,
          pengguna_id: permissions.id
        }}
        toolbar={<SimToolbar />}
      >
        <NumberInput
          source="nrp_nip"
          label="NRP/NIP"
          validate={validateNrpNip}
        />
      </SimpleForm>
    </Create>
  ) : null;

const EditSim = ({ permissions, ...rest }) =>
  permissions ? (
    <Edit {...rest} title="SIM">
      <SimpleForm
        defaultValue={{
          updated: moment(),
          lingkup_id: permissions.lingkup_id,
          penyelenggara: permissions.penyelenggara_id,
          pengguna_id: permissions.id
        }}
        toolbar={<SimToolbar />}
      >
        <NumberInput
          source="nrp_nip"
          label="NRP/NIP"
          validate={validateNrpNip}
        />
      </SimpleForm>
    </Edit>
  ) : null;

const ListSim = ({ permissions, ...rest }) =>
  permissions ? (
    <List {...rest} title="SIM" sort={{ field: "created", order: "DESC" }}>
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
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  ) : null;

export default {
  create: CreateSim,
  edit: EditSim,
  list: ListSim
};
