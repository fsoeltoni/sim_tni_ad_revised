import React from "react";
import {
  Create,
  SimpleForm,
  Edit,
  List,
  Datagrid,
  EditButton,
  DeleteButton
} from "react-admin";
import moment from "moment";
import FormattedDateField from "../../helpers/components/FormattedDateField";

const CreateSim = ({ ...rest }) => (
  <Create {...rest} title="SIM">
    <SimpleForm
      defaultValue={{
        created: moment(),
        updated: moment(),
        berlaku_hingga: moment().add(5, "y")
      }}
    ></SimpleForm>
  </Create>
);

const EditSim = ({ ...rest }) => (
  <Edit {...rest} title="SIM">
    <SimpleForm
      defaultValue={{
        updated: moment()
      }}
    ></SimpleForm>
  </Edit>
);

const ListSim = ({ ...rest }) => (
  <List {...rest} title="SIM" sort={{ field: "created", order: "DESC" }}>
    <Datagrid>
      <FormattedDateField source="created" label="Dibuat" />
      <FormattedDateField source="berlaku_hingga" label="Berlaku Hingga" />
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
