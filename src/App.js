import React from "react";
import { Admin } from "react-admin";
import attrs from "./providers/attrs";
import { mockDataServer } from "./providers/data";

const title = attrs.title;
const dataProvider = mockDataServer;

const App = () => <Admin title={title} dataProvider={dataProvider} />;

export default App;
