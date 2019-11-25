import React from "react";
import { Admin } from "react-admin";
import attrs from "./providers/attrs";
import { mockDataServer } from "./providers/data";
import { Resource } from "ra-core";
import sim from "./resources/sim";
import personel from "./resources/personel";
import pengguna from "./resources/pengguna";
import auth from "./providers/auth";
import penyelenggara from "./resources/penyelenggara";
import lingkup from "./resources/lingkup";
import golongan_sim from "./resources/golongan_sim";
import pengajuan_sim from "./resources/pengajuan_sim";
import jenis_pengguna from "./resources/jenis_pengguna";
import jenis_personel from "./resources/jenis_personel";
import jenjang_kepangkatan from "./resources/jenjang_kepangkatan";
import pangkat from "./resources/pangkat";

const title = attrs.title;
const dataProvider = mockDataServer;
const authProvider = auth;

const App = () => (
  <Admin title={title} dataProvider={dataProvider} authProvider={authProvider}>
    <Resource name="sim" options={{ label: "SIM" }} {...sim} />
    <Resource
      name="golongan_sim"
      options={{ label: "Golongan SIM" }}
      {...golongan_sim}
    />
    <Resource
      name="pengajuan_sim"
      options={{ label: "Pengajuan SIM" }}
      {...pengajuan_sim}
    />
    <Resource name="pengguna" options={{ label: "Pengguna" }} {...pengguna} />
    <Resource
      name="jenis_pengguna"
      options={{ label: "Jenis Pengguna" }}
      {...jenis_pengguna}
    />
    <Resource name="personel" options={{ label: "Personel" }} {...personel} />
    <Resource
      name="jenis_personel"
      options={{ label: "Jenis Personel" }}
      {...jenis_personel}
    />
    <Resource name="pangkat" options={{ label: "Pangkat" }} {...pangkat} />
    <Resource
      name="jenjang_kepangkatan"
      options={{ label: "Jenjang Kepangkatan" }}
      {...jenjang_kepangkatan}
    />
    <Resource
      name="penyelenggara"
      options={{ label: "Penyelenggara" }}
      {...penyelenggara}
    />
    <Resource name="lingkup" options={{ label: "Lingkup" }} {...lingkup} />
  </Admin>
);

export default App;
