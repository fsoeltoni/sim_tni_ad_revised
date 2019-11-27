import React, { useState, useEffect, useRef } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Title } from "react-admin";
import { useDataProvider } from "ra-core";
import moment from "moment";
import monthToRoman from "../../monthToRoman";
import SimCanvas from "./SimCanvas";
import { CardActions, Button } from "@material-ui/core";
import ReactToPrint from "react-to-print";

const SimPrint = ({
  match: {
    params: { id }
  },
  ...rest
}) => {
  const dataProvider = useDataProvider();
  const [sim, setSim] = useState();
  const [pengajuan_sim, setPengajuanSim] = useState();
  const [golongan_sim, setGolonganSim] = useState();
  const [lingkup, setLingkup] = useState();
  const [penyelenggara, setPenyelenggara] = useState();
  const [markas, setMarkas] = useState();
  const [komandan, setKomandan] = useState();
  const [pangkat_komandan, setPangkatKomandan] = useState();
  const [korps_komandan, setKorpsKomandan] = useState();
  const [personel, setPersonel] = useState();
  const [golongan_darah, setGolonganDarah] = useState();
  const [tempat_lahir, setTempatLahir] = useState();
  const [pangkat, setPangkat] = useState();
  const [korps, setKorps] = useState();
  const [kesatuan, setKesatuan] = useState();

  useEffect(() => {
    dataProvider.getOne("sim", { id: id }).then(({ data }) => {
      dataProvider
        .getOne("pengajuan_sim", { id: data.pengajuan_sim_id })
        .then(({ data }) => setPengajuanSim(data));

      dataProvider
        .getOne("golongan_sim", { id: data.golongan_sim_id })
        .then(({ data }) => setGolonganSim(data));

      dataProvider
        .getOne("lingkup", { id: data.lingkup_id })
        .then(({ data }) => setLingkup(data));

      dataProvider
        .getOne("penyelenggara", { id: data.penyelenggara_id })
        .then(({ data }) => {
          dataProvider
            .getOne("kota_kabupaten", { id: data.markas_id })
            .then(({ data }) => setMarkas(data));

          dataProvider
            .getOne("personel", { id: data.komandan_id })
            .then(({ data }) => {
              dataProvider
                .getOne("pangkat", { id: data.pangkat_id })
                .then(({ data }) => setPangkatKomandan(data));

              dataProvider
                .getOne("korps", { id: data.korps_id })
                .then(({ data }) => setKorpsKomandan(data));

              setKomandan(data);
            });

          setPenyelenggara(data);
        });

      dataProvider
        .getOne("personel", { id: data.personel_id })
        .then(({ data }) => {
          dataProvider
            .getOne("golongan_darah", { id: data.golongan_darah_id })
            .then(({ data }) => setGolonganDarah(data));

          dataProvider
            .getOne("kota_kabupaten", { id: data.tempat_lahir_id })
            .then(({ data }) => setTempatLahir(data));

          dataProvider
            .getOne("pangkat", { id: data.pangkat_id })
            .then(({ data }) => setPangkat(data));

          dataProvider
            .getOne("korps", { id: data.korps_id })
            .then(({ data }) => setKorps(data));

          dataProvider
            .getOne("kesatuan", { id: data.kesatuan_id })
            .then(({ data }) => setKesatuan(data));

          setPersonel(data);
        });

      setSim(data);
    });
  }, [dataProvider, id]);

  const display_kode_sim_kode_sim_penyelenggara_kode = penyelenggara
    ? penyelenggara.kode
    : null;
  const display_kode_sim_no_urut_sim = sim
    ? "." + sim.id.toString().padStart(4, "0")
    : null;
  const display_kode_sim_tanggal_lahir = personel
    ? "." + moment(personel.tanggal_lahir).format("MMYY")
    : null;
  const display_kode_sim_golongan_sim_nama = golongan_sim
    ? "/" + golongan_sim.nama
    : null;
  const display_kode_sim_pengajuan_sim_kode = pengajuan_sim
    ? "." + pengajuan_sim.kode
    : null;
  const display_kode_sim_tanggal_pembuatan_sim = sim
    ? "/" +
      monthToRoman(moment(sim.created).format("M")) +
      "/" +
      moment(sim.created).format("YYYY")
    : null;

  const display_kode_sim =
    display_kode_sim_kode_sim_penyelenggara_kode +
    display_kode_sim_no_urut_sim +
    display_kode_sim_tanggal_lahir +
    display_kode_sim_golongan_sim_nama +
    display_kode_sim_pengajuan_sim_kode +
    display_kode_sim_tanggal_pembuatan_sim;

  const display_nama = personel ? personel.nama : null;
  const display_tempat_lahir = tempat_lahir ? tempat_lahir.nama : null;
  const display_tanggal_lahir = personel
    ? moment(personel.tanggal_lahir).format("DD-MM-YYYY")
    : null;
  const display_tempat_tanggal_lahir =
    display_tempat_lahir + "/" + display_tanggal_lahir;
  const display_pangkat = pangkat ? pangkat.kode : null;
  const display_korps = korps ? korps.kode : null;
  const display_nrp_nip = personel ? personel.nrp_nip : null;
  const display_pangkat_korps_nrp_nip =
    display_pangkat + " " + display_korps + "/" + display_nrp_nip;
  const display_kesatuan = kesatuan ? kesatuan.kode : null;
  const display_golongan_darah = golongan_darah ? golongan_darah.nama : null;
  const display_diberikan_di = markas ? markas.nama : null;
  const display_pada_tanggal = sim
    ? moment(sim.created).format("DD-MM-YYYY")
    : null;
  const display_berlaku_hingga = sim
    ? moment(sim.berlaku_hingga).format("DD-MM-YYYY")
    : null;

  const display_label_komandan = lingkup ? lingkup.label_komandan : null;
  const display_nama_komandan = komandan ? komandan.nama : null;
  const display_pangkat_komandan = pangkat_komandan
    ? pangkat_komandan.kode
    : null;
  const display_korps_komandan = korps_komandan ? korps_komandan.kode : null;
  const display_nrp_komandan = komandan ? komandan.nrp_nip : null;
  const display_pangkat_korps_nrp_komandan =
    display_pangkat_komandan +
    " " +
    display_korps_komandan +
    "/" +
    display_nrp_komandan;
  const display_tanda_tangan = sim ? sim.tanda_tangan : null;

  const componentRef = useRef();

  return (
    <Card>
      <Title title="Cetak SIM" />
      <CardContent>
        {display_kode_sim &&
          display_nama &&
          display_tempat_tanggal_lahir &&
          display_pangkat_korps_nrp_nip &&
          display_kesatuan &&
          display_golongan_darah &&
          display_diberikan_di &&
          display_pada_tanggal &&
          display_berlaku_hingga &&
          display_label_komandan &&
          display_nama_komandan &&
          display_pangkat_korps_nrp_komandan &&
          display_tanda_tangan && (
            <SimCanvas
              ref={componentRef}
              no_sim={display_kode_sim}
              nama={display_nama}
              tempat_tanggal_lahir={display_tempat_tanggal_lahir}
              pangkat_korps_nrp_nip={display_pangkat_korps_nrp_nip}
              kesatuan={display_kesatuan}
              golongan_darah={display_golongan_darah}
              diberikan_di={display_diberikan_di}
              pada_tanggal={display_pada_tanggal}
              berlaku_hingga={display_berlaku_hingga}
              label_komandan={display_label_komandan}
              nama_komandan={display_nama_komandan}
              pangkat_korps_nrp_komandan={display_pangkat_korps_nrp_komandan}
              no_urut_sim={display_kode_sim_no_urut_sim}
              tanda_tangan={display_tanda_tangan}
            />
          )}
      </CardContent>
      <CardActions>
        <ReactToPrint
          trigger={() => (
            <Button variant="contained" color="primary">
              Cetak
            </Button>
          )}
          content={() => componentRef.current}
        />
      </CardActions>
    </Card>
  );
};

export default SimPrint;
