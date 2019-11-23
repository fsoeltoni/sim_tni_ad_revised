import React from "react";
import { Admin } from "react-admin";
import attrs from "./providers/attrs";
import { mockDataServer } from "./providers/data";
import { Resource } from "ra-core";
import sim from "./resources/sim";
import personel from "./resources/personel";
import pengguna from "./resources/pengguna";
import auth from "./providers/auth";

const title = attrs.title;
const dataProvider = mockDataServer;
const authProvider = auth;

const App = () => (
  <Admin title={title} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="sim" options={{ label: "SIM" }} {...sim} />
    <Resource name="pengguna" options={{ label: "Pengguna" }} {...pengguna} />
    <Resource name="personel" options={{ label: "Personel" }} {...personel} />
  </Admin>
);

export default App;
