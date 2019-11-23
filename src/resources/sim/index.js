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
import validateNrpNip from "./helpers/validations/validateNrpNip";
import SimToolbar from "./helpers/components/SimToolbar";

const CreateSim = ({ ...rest }) => (
  <Create {...rest} title="SIM">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment(),
        berlaku_hingga: moment().add(5, "y")
      }}
      toolbar={<SimToolbar />}
    >
      <NumberInput source="nrp_nip" label="NRP/NIP" validate={validateNrpNip} />
    </SimpleForm>
  </Create>
);

const EditSim = ({ ...rest }) => (
  <Edit {...rest} title="SIM">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
      toolbar={<SimToolbar />}
    >
      <NumberInput source="nrp_nip" label="NRP/NIP" validate={validateNrpNip} />
    </SimpleForm>
  </Edit>
);

const ListSim = ({ ...rest }) => (
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
);

export default {
  create: CreateSim,
  edit: EditSim,
  list: ListSim
};
