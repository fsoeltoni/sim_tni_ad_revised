import React, { useState, createElement } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@material-ui/core";
import { DashboardMenuItem, MenuItemLink } from "react-admin";
import {
  AccountBalance,
  AspectRatio,
  Style,
  TransferWithinAStation,
  People,
  Public,
  KeyboardArrowRight
} from "@material-ui/icons";
import { List, ListSubheader, Divider } from "@material-ui/core";
import SubMenu from "./SubMenu";

const Menu = ({ onMenuClick, dense, logout }) => {
  const [state, setState] = useState({
    menuKepangkatan: false,
    menuKesatuan: false,
    menuLokasi: false,
    menuPersonel: false,
    menuPenyelenggara: false,
    menuPengguna: false,
    menuSim: false
  });
  const isXsmall = useMediaQuery(theme => theme.breakpoints.down("xs"));
  const open = useSelector(state => state.admin.ui.sidebarOpen);
  useSelector(state => state.theme); // force rerender on theme change

  const handleToggle = menu => {
    setState(state => ({ ...state, [menu]: !state[menu] }));
  };

  return (
    <div>
      {" "}
      <DashboardMenuItem onClick={onMenuClick} />
      <MenuItemLink
        to={`/sim`}
        primaryText={"SIM"}
        leftIcon={createElement(Style)}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
      <MenuItemLink
        to={`/personel`}
        primaryText={"Personel"}
        leftIcon={createElement(People)}
        onClick={onMenuClick}
        sidebarIsOpen={open}
        dense={dense}
      />
      <Divider />
      <List
        component="nav"
        subheader={
          <ListSubheader component="div">Area Administrasi</ListSubheader>
        }
      >
        <MenuItemLink
          to={`/penyelenggara`}
          primaryText={"Penyelenggara"}
          leftIcon={createElement(AccountBalance)}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/lingkup`}
          primaryText={"Lingkup"}
          leftIcon={createElement(AspectRatio)}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
        <MenuItemLink
          to={`/pengguna`}
          primaryText={"Pengguna"}
          leftIcon={createElement(TransferWithinAStation)}
          onClick={onMenuClick}
          sidebarIsOpen={open}
          dense={dense}
        />
      </List>
      <Divider />
      <List
        component="nav"
        subheader={<ListSubheader component="div">Data Master</ListSubheader>}
      >
        <SubMenu
          handleToggle={() => handleToggle("menuSim")}
          isOpen={state.menuSim}
          sidebarIsOpen={open}
          name="SIM"
          icon={createElement(Style)}
          dense={dense}
        >
          <MenuItemLink
            to={`/pengajuan_sim`}
            primaryText={"Pengajuan"}
            leftIcon={createElement(KeyboardArrowRight)}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={`/golongan_sim`}
            primaryText={"Golongan"}
            leftIcon={createElement(KeyboardArrowRight)}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
        </SubMenu>
        <SubMenu
          handleToggle={() => handleToggle("menuPengguna")}
          isOpen={state.menuPengguna}
          sidebarIsOpen={open}
          name="Pengguna"
          icon={createElement(TransferWithinAStation)}
          dense={dense}
        >
          <MenuItemLink
            to={`/jenis_pengguna`}
            primaryText={"Jenis"}
            leftIcon={createElement(KeyboardArrowRight)}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
        </SubMenu>
        <SubMenu
          handleToggle={() => handleToggle("menuPersonel")}
          isOpen={state.menuPersonel}
          sidebarIsOpen={open}
          name="Personel"
          icon={createElement(People)}
          dense={dense}
        >
          <MenuItemLink
            to={`/golongan_darah`}
            primaryText={"Golongan Darah"}
            leftIcon={createElement(KeyboardArrowRight)}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={`/jenis_personel`}
            primaryText={"Jenis"}
            leftIcon={createElement(KeyboardArrowRight)}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <SubMenu
            handleToggle={() => handleToggle("menuKesatuan")}
            isOpen={state.menuKesatuan}
            sidebarIsOpen={open}
            name="Kesatuan"
            icon={createElement(KeyboardArrowRight)}
            dense={dense}
          >
            <MenuItemLink
              to={`/kesatuan`}
              primaryText={"Kesatuan"}
              leftIcon={createElement(KeyboardArrowRight)}
              onClick={onMenuClick}
              sidebarIsOpen={open}
              dense={dense}
            />
            <MenuItemLink
              to={`/korps`}
              primaryText={"Korps"}
              leftIcon={createElement(KeyboardArrowRight)}
              onClick={onMenuClick}
              sidebarIsOpen={open}
              dense={dense}
            />
            <MenuItemLink
              to={`/kecabangan`}
              primaryText={"Kecabangan"}
              leftIcon={createElement(KeyboardArrowRight)}
              onClick={onMenuClick}
              sidebarIsOpen={open}
              dense={dense}
            />
          </SubMenu>
          <SubMenu
            handleToggle={() => handleToggle("menuKepangkatan")}
            isOpen={state.menuKepangkatan}
            sidebarIsOpen={open}
            name="Kepangkatan"
            icon={createElement(KeyboardArrowRight)}
            dense={dense}
          >
            <MenuItemLink
              to={`/pangkat`}
              primaryText={"Pangkat"}
              leftIcon={createElement(KeyboardArrowRight)}
              onClick={onMenuClick}
              sidebarIsOpen={open}
              dense={dense}
            />
            <MenuItemLink
              to={`/jenjang_kepangkatan`}
              primaryText={"Jenjang"}
              leftIcon={createElement(KeyboardArrowRight)}
              onClick={onMenuClick}
              sidebarIsOpen={open}
              dense={dense}
            />
          </SubMenu>
        </SubMenu>
        <SubMenu
          handleToggle={() => handleToggle("menuLokasi")}
          isOpen={state.menuLokasi}
          sidebarIsOpen={open}
          name="Lokasi"
          icon={createElement(Public)}
          dense={dense}
        >
          <MenuItemLink
            to={`/provinsi`}
            primaryText={"Provinsi"}
            leftIcon={createElement(KeyboardArrowRight)}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={`/kota_kabupaten`}
            primaryText={"Kota/Kabupaten"}
            leftIcon={createElement(KeyboardArrowRight)}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
          <MenuItemLink
            to={`/jenis_kota_kabupaten`}
            primaryText={"Jenis"}
            leftIcon={createElement(KeyboardArrowRight)}
            onClick={onMenuClick}
            sidebarIsOpen={open}
            dense={dense}
          />
        </SubMenu>
      </List>
      {isXsmall && logout}
    </div>
  );
};

Menu.propTypes = {
  onMenuClick: PropTypes.func,
  logout: PropTypes.object
};

export default Menu;
