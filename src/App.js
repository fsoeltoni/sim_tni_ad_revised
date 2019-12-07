import React from "react";
import { Admin, Login } from "react-admin";
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
import kecabangan from "./resources/kecabangan";
import korps from "./resources/korps";
import kesatuan from "./resources/kesatuan";
import golongan_darah from "./resources/golongan_darah";
import provinsi from "./resources/provinsi";
import jenis_kota_kabupaten from "./resources/jenis_kota_kabupaten";
import kota_kabupaten from "./resources/kota_kabupaten";
import jenis_pomdam from "./resources/jenis_pomdam";
import route from "./providers/route";
import AppLayout from "./layouts/AppLayout";
import myTheme from "./layouts/MyTheme";

const title = attrs.title;
const dataProvider = mockDataServer;
const authProvider = auth;
const customRoutes = route;
const appLayout = AppLayout;
const LoginPage = () => <Login backgroundImage="/background.jpg" />;

const App = () => (
  <div>
    <Admin
      title={title}
      dataProvider={dataProvider}
      authProvider={authProvider}
      customRoutes={customRoutes}
      layout={appLayout}
      loginPage={LoginPage}
      theme={myTheme}
    >
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
      <Resource
        name="kota_kabupaten"
        options={{ label: "Kota/Kabupaten" }}
        {...kota_kabupaten}
      />
      <Resource
        name="jenis_kota_kabupaten"
        options={{ label: "Jenis Kota/Kabupaten" }}
        {...jenis_kota_kabupaten}
      />
      <Resource name="provinsi" options={{ label: "Provinsi" }} {...provinsi} />
      <Resource
        name="golongan_darah"
        options={{ label: "Golongan Darah" }}
        {...golongan_darah}
      />
      <Resource name="kesatuan" options={{ label: "Kesatuan" }} {...kesatuan} />
      <Resource name="korps" options={{ label: "Korps" }} {...korps} />
      <Resource
        name="kecabangan"
        options={{ label: "Kecabangan" }}
        {...kecabangan}
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
      <Resource
        name="jenis_pomdam"
        options={{ label: "Jenis Pomdam" }}
        {...jenis_pomdam}
      />
      <Resource name="lingkup" options={{ label: "Lingkup" }} {...lingkup} />
    </Admin>
  </div>
);

export default App;
