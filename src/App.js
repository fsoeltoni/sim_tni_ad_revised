import React from "react";
import { Admin } from "react-admin";
import attrs from "./providers/attrs";
import { mockDataServer } from "./providers/data";
import { Resource } from "ra-core";
import sim from "./resources/sim";

const title = attrs.title;
const dataProvider = mockDataServer;

const App = () => (
  <Admin title={title} dataProvider={dataProvider}>
    <Resource name="sim" options={{ label: "SIM" }} {...sim} />
  </Admin>
);

export default App;
