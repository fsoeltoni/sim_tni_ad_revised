import { mockDataServer } from "../../../providers/data";

export default async val => {
  if (val) {
    return mockDataServer
      .getList("personel", {
        pagination: { page: 1, perPage: 1 },
        sort: { field: "id", order: "ASC" },
        filter: { nrp_nip: val }
      })
      .then(response => {
        const result = response.data;

        if (result.length < 1) {
          return "NRP/NIP tidak ditemukan.";
        }
      });
  } else {
    return "NRP/NIP harus diisi.";
  }
};
