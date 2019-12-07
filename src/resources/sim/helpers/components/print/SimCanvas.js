import React, { Component } from "react";
import { Stage, Layer, Rect, Text, Group, Image } from "react-konva";
import JsBarcode from "jsbarcode";

const NoSim = ({ x, y, content }) => (
  <Group x={x} y={y}>
    <Text
      x={85}
      text={content}
      fontSize={12}
      fontStyle="bold"
      fontFamily="Roboto"
    />
  </Group>
);

const Nama = ({ y, content }) => (
  <Group y={y}>
    <Text text="Nama" fontSize={13} fontFamily="Roboto" />
    <Text x={110} text=":" fontSize={13} fontFamily="Roboto" />
    <Text x={120} text={content} fontSize={13} fontFamily="Roboto" />
  </Group>
);

const TempatTanggalLahir = ({ y, content }) => (
  <Group y={y}>
    <Text text="Tempat/Tgl. Lahir" fontSize={13} fontFamily="Roboto" />
    <Text x={110} text=":" fontSize={13} fontFamily="Roboto" />
    <Text x={120} text={content} fontSize={13} fontFamily="Roboto" />
  </Group>
);

const PangkatKorpsNrpNip = ({ y, content }) => (
  <Group y={y}>
    <Text text="Pangkat/NRP/NIP" fontSize={13} fontFamily="Roboto" />
    <Text x={110} text=":" fontSize={13} fontFamily="Roboto" />
    <Text x={120} text={content} fontSize={13} fontFamily="Roboto" />
  </Group>
);

const Kesatuan = ({ y, content }) => (
  <Group y={y}>
    <Text text="Kesatuan" fontSize={13} fontFamily="Roboto" />
    <Text x={110} text=":" fontSize={13} fontFamily="Roboto" />
    <Text x={120} text={content} fontSize={13} fontFamily="Roboto" />
  </Group>
);

const GolonganDarah = ({ y, content }) => (
  <Group y={y}>
    <Text text="Golongan darah" fontSize={13} fontFamily="Roboto" />
    <Text x={110} text=":" fontSize={13} fontFamily="Roboto" />
    <Text x={120} text={content} fontSize={13} fontFamily="Roboto" />
  </Group>
);

const DiberikanDi = ({ y, content }) => (
  <Group y={y}>
    <Text text="Diberikan di" fontSize={13} fontFamily="Roboto" />
    <Text x={90} text=":" fontSize={13} fontFamily="Roboto" />
    <Text x={100} text={content} fontSize={13} fontFamily="Roboto" />
  </Group>
);

const PadaTanggal = ({ y, content }) => (
  <Group y={y}>
    <Text text="Pada tanggal" fontSize={13} fontFamily="Roboto" />
    <Text x={90} text=":" fontSize={13} fontFamily="Roboto" />
    <Text x={100} text={content} fontSize={13} fontFamily="Roboto" />
  </Group>
);

const BerlakuHingga = ({ y, content }) => (
  <Group y={y}>
    <Text text="Berlaku hingga" fontSize={13} fontFamily="Roboto" />
    <Text x={90} text=":" fontSize={13} fontFamily="Roboto" />
    <Text x={100} text={content} fontSize={13} fontFamily="Roboto" />
  </Group>
);

const LabelKomandan = ({ y, content }) => (
  <Group y={y}>
    <Text text={content} fontSize={13} fontFamily="Roboto" fontStyle="bold" />
  </Group>
);

const NamaKomandan = ({ y, content }) => (
  <Group y={y}>
    <Text text={content} fontSize={13} fontFamily="Roboto" />
  </Group>
);

const PangkatKorpsNrpKomandan = ({ y, content }) => (
  <Group y={y}>
    <Text text={content} fontSize={13} fontFamily="Roboto" />
  </Group>
);

const DataPribadi = ({
  x,
  y,
  nama,
  tempat_tanggal_lahir,
  pangkat_korps_nrp_nip,
  kesatuan,
  golongan_darah
}) => (
  <Group x={x} y={y}>
    <Nama y={0} content={nama}></Nama>
    <TempatTanggalLahir y={15} content={tempat_tanggal_lahir} />
    <PangkatKorpsNrpNip y={30} content={pangkat_korps_nrp_nip} />
    <Kesatuan y={45} content={kesatuan} />
    <GolonganDarah y={60} content={golongan_darah} />
  </Group>
);

const KeteranganSim = ({
  x,
  y,
  diberikan_di,
  pada_tanggal,
  berlaku_hingga
}) => (
  <Group x={x} y={y}>
    <DiberikanDi y={0} content={diberikan_di} />
    <PadaTanggal y={15} content={pada_tanggal} />
    <BerlakuHingga y={30} content={berlaku_hingga} />
  </Group>
);

const Komandan = ({
  x,
  y,
  label_komandan,
  nama_komandan,
  pangkat_korps_nrp_nip_komandan
}) => (
  <Group x={x} y={y}>
    <LabelKomandan y={0} content={label_komandan} />
    <NamaKomandan y={45} content={nama_komandan} />
    <PangkatKorpsNrpKomandan y={60} content={pangkat_korps_nrp_nip_komandan} />
  </Group>
);

class SimCanvas extends Component {
  state = {};

  componentDidMount = () => {
    const { sim_id } = this.props;

    this.loadBarcode(sim_id);
    this.loadSignature();
    this.loadSidikJari();
    this.loadPasFoto();
  };

  loadPasFoto = () => {
    const { pas_foto } = this.props;
    this.pas_foto = new window.Image();
    this.pas_foto.src = pas_foto;

    this.pas_foto.addEventListener("load", this.handleLoadPasFoto);
  };

  handleLoadPasFoto = () => {
    this.setState({
      pas_foto: this.pas_foto
    });
  };

  loadBarcode = no_urut_sim => {
    this.barcode = new window.Image();

    JsBarcode(this.barcode, no_urut_sim, {
      width: 2,
      height: 25,
      background: "transparent",
      displayValue: false
    });

    this.barcode.addEventListener("load", this.handleLoadBarcode);
  };

  handleLoadBarcode = () => {
    this.setState({
      barcode: this.barcode
    });
  };

  loadSignature = () => {
    const { tanda_tangan } = this.props;

    this.signature = new window.Image();
    this.signature.src = tanda_tangan;

    this.signature.addEventListener("load", this.handleLoadSignature);
  };

  handleLoadSignature = () => {
    this.setState({
      signature: this.signature
    });
  };

  loadSidikJari = () => {
    const { sidik_jari } = this.props;
    this.sidik_jari = new window.Image();
    this.sidik_jari.src = sidik_jari;

    this.sidik_jari.addEventListener("load", this.handleLoadSidikJari);
  };

  handleLoadSidikJari = () => {
    this.setState({
      sidik_jari: this.sidik_jari
    });
  };

  render() {
    const {
      no_sim,
      nama,
      tempat_tanggal_lahir,
      pangkat_korps_nrp_nip,
      kesatuan,
      golongan_darah,
      diberikan_di,
      pada_tanggal,
      berlaku_hingga,
      label_komandan,
      nama_komandan,
      pangkat_korps_nrp_nip_komandan
    } = this.props;

    return (
      <div>
        <Stage width={600} height={400}>
          <Layer>
            <Rect
              x={0}
              y={0}
              width={500}
              height={300}
              shadowBlur={5}
              fill="blue"
            />
            <NoSim x={125} y={60} content={no_sim} />
            <DataPribadi
              x={20}
              y={90}
              nama={nama}
              tempat_tanggal_lahir={tempat_tanggal_lahir}
              pangkat_korps_nrp_nip={pangkat_korps_nrp_nip}
              kesatuan={kesatuan}
              golongan_darah={golongan_darah}
            />
            <KeteranganSim
              x={260}
              y={170}
              diberikan_di={diberikan_di}
              pada_tanggal={pada_tanggal}
              berlaku_hingga={berlaku_hingga}
            />
            <Komandan
              x={280}
              y={220}
              label_komandan={label_komandan}
              nama_komandan={nama_komandan}
              pangkat_korps_nrp_nip_komandan={pangkat_korps_nrp_nip_komandan}
            />
            <Image
              x={140}
              y={165}
              image={this.state.pas_foto}
              width={80}
              height={95}
            ></Image>
            <Image x={126} y={255} image={this.state.barcode}></Image>
            <Image
              x={40}
              y={165}
              image={this.state.sidik_jari}
              width={80}
              height={80}
            ></Image>
            <Image
              x={-10}
              y={250}
              width={200}
              height={40}
              image={this.state.signature}
            ></Image>
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default SimCanvas;
