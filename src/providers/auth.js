import { mockDataServer } from "./data";
import storage from "./storage";
import { translate } from "ra-core";

export default {
  login: async ({ username, password }) => {
    await mockDataServer
      .getList("pengguna", {
        pagination: { page: 1, perPage: 1 },
        sort: { field: "id", order: "ASC" },
        filter: {
          nrp_nik: username,
          sandi: password
        }
      })
      .then(res => {
        const pengguna = res.data[0];

        if (pengguna !== undefined) {
          storage.set(pengguna);

          return Promise.resolve();
        } else {
          return Promise.reject(translate("Login Gagal"));
        }
      });
  },
  logout: () => {
    storage.clear();

    return Promise.resolve();
  },
  checkError: error => {
    const status = error.status;

    if (status === 401 || status === 403) {
      console.log(status);
      storage.clear();
      return Promise.reject();
    }

    return Promise.resolve();
  },
  checkAuth: () => {
    const pengguna = storage.get();

    return pengguna ? Promise.resolve(pengguna) : Promise.reject();
  },
  getPermissions: () => Promise.reject("Unknown method")
};
