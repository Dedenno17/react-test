import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  data: {
    id: "",
    namaDepan: "",
    namaBelakang: "",
    email: "",
    tempatLahir: "",
    bulanLahir: "",
    tanggalLahir: "",
    tahunLahir: "",
    gender: "",
    alamat: "",
    kecamatan: "",
    kota: "",
    kewarganegaraan: "",
    riwayatPendidikan: [],
    pengalamanKerja: [],
    keahlian: [],
  },
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialStateValue,
  reducers: {
    addPersonal: (state, action) => {
      state.data.id = action.payload.id;
      state.data.namaDepan = action.payload.namaDepan;
      state.data.namaBelakang = action.payload.namaBelakang;
      state.data.email = action.payload.email;
      state.data.bulanLahir = action.payload.bulanLahir;
      state.data.tempatLahir = action.payload.tempatLahir;
      state.data.tanggalLahir = action.payload.tanggalLahir;
      state.data.tahunLahir = action.payload.tahunLahir;
      state.data.gender = action.payload.gender;
      state.data.alamat = action.payload.alamat;
      state.data.kecamatan = action.payload.kecamatan;
      state.data.kota = action.payload.kota;
      state.data.kewarganegaraan = action.payload.kewarganegaraan;
    },
    addPendidikan: (state, action) => {
      const newPendidikan = [...state.data.riwayatPendidikan, action.payload];
      state.data.riwayatPendidikan = newPendidikan;
    },
    addPengalaman: (state, action) => {
      const newPengalaman = [...state.data.pengalamanKerja, action.payload];
      state.data.pengalamanKerja = newPengalaman;
    },
    addKeahlian: (state, action) => {
      const newKeahlian = [...state.data.keahlian, action.payload];
      state.data.keahlian = newKeahlian;
    },
    deleteData: (state) => {
      state.data = initialStateValue.data;
    },
  },
});

export const userDataActions = userDataSlice.actions;

export default userDataSlice.reducer;
