import React, { Component } from "react";
import { Stage, Layer, Rect, Text, Group, Image } from "react-konva";
import JsBarcode from "jsbarcode";

const NoSim = ({ x, y, content }) => (
  <Group x={x} y={y}>
    <Text text="SIM TNI NO : " fontStyle="bold" />
    <Text x={80} text={content} />
  </Group>
);

const Nama = ({ y, content }) => (
  <Group y={y}>
    <Text text="Nama" fontSize={11} />
    <Text x={100} text=":" fontSize={11} />
    <Text x={110} text={content} fontSize={11} />
  </Group>
);

const TempatTanggalLahir = ({ y, content }) => (
  <Group y={y}>
    <Text text="Tempat/Tgl. Lahir" fontSize={11} />
    <Text x={100} text=":" fontSize={11} />
    <Text x={110} text={content} fontSize={11} />
  </Group>
);

const PangkatKorpsNrpNip = ({ y, content }) => (
  <Group y={y}>
    <Text text="Pangkat/NRP/NIP" fontSize={11} />
    <Text x={100} text=":" fontSize={11} />
    <Text x={110} text={content} fontSize={11} />
  </Group>
);

const Kesatuan = ({ y, content }) => (
  <Group y={y}>
    <Text text="Kesatuan" fontSize={11} />
    <Text x={100} text=":" fontSize={11} />
    <Text x={110} text={content} fontSize={11} />
  </Group>
);

const GolonganDarah = ({ y, content }) => (
  <Group y={y}>
    <Text text="Golongan darah" fontSize={11} />
    <Text x={100} text=":" fontSize={11} />
    <Text x={110} text={content} fontSize={11} />
  </Group>
);

const DiberikanDi = ({ y, content }) => (
  <Group y={y}>
    <Text text="Diberikan di" fontSize={11} />
    <Text x={90} text=":" fontSize={11} />
    <Text x={100} text={content} fontSize={11} />
  </Group>
);

const PadaTanggal = ({ y, content }) => (
  <Group y={y}>
    <Text text="Pada tanggal" fontSize={11} />
    <Text x={90} text=":" fontSize={11} />
    <Text x={100} text={content} fontSize={11} />
  </Group>
);

const BerlakuHingga = ({ y, content }) => (
  <Group y={y}>
    <Text text="Berlaku hingga" fontSize={11} />
    <Text x={90} text=":" fontSize={11} />
    <Text x={100} text={content} fontSize={11} />
  </Group>
);

const LabelKomandan = ({ y, content }) => (
  <Group y={y}>
    <Text text={content} fontSize={11} fontStyle="bold" />
  </Group>
);

const NamaKomandan = ({ y, content }) => (
  <Group y={y}>
    <Text text={content} fontSize={11} fontStyle="bold" />
  </Group>
);

const PangkatKorpsNrpKomandan = ({ y, content }) => (
  <Group y={y}>
    <Text text={content} fontSize={11} fontStyle="bold" />
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
    <NamaKomandan y={40} content={nama_komandan} />
    <PangkatKorpsNrpKomandan y={50} content={pangkat_korps_nrp_nip_komandan} />
  </Group>
);

const PasFoto = ({ x, y }) => (
  <Image x={x} y={y} width={60} height={75} fill="white" />
);

class SimCanvas extends Component {
  state = {};

  componentDidMount = () => {
    const { no_urut_sim } = this.props;
    this.loadBarcode(no_urut_sim);
    this.loadSignature();
  };

  loadBarcode = no_urut_sim => {
    this.barcode = new window.Image();

    JsBarcode(this.barcode, no_urut_sim, {
      width: 1,
      height: 10,
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
        <Stage width={500} height={300}>
          <Layer>
            <Rect
              x={0}
              y={0}
              width={400}
              height={250}
              fill="blue"
              shadowBlur={5}
            />
            <NoSim x={80} y={40} content={no_sim} />
            <DataPribadi
              x={10}
              y={70}
              nama={nama}
              tempat_tanggal_lahir={tempat_tanggal_lahir}
              pangkat_korps_nrp_nip={pangkat_korps_nrp_nip}
              kesatuan={kesatuan}
              golongan_darah={golongan_darah}
            />
            <KeteranganSim
              x={230}
              y={140}
              diberikan_di={diberikan_di}
              pada_tanggal={pada_tanggal}
              berlaku_hingga={berlaku_hingga}
            />
            <Komandan
              x={250}
              y={185}
              label_komandan={label_komandan}
              nama_komandan={nama_komandan}
              pangkat_korps_nrp_nip_komandan={pangkat_korps_nrp_nip_komandan}
            />
            <PasFoto x={140} y={140} />
            <Image x={140} y={220} image={this.state.barcode}></Image>
            <Image
              x={-50}
              y={200}
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
