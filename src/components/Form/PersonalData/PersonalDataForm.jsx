import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import InputText from "../../UI/InputText";
import RadioButton from "../../UI/RadioButton";
import SelectOption from "../../UI/SelectOption";
import TextArea from "../../UI/TextArea";
import Button from "../../UI/Button";

import { hari } from "../../../data/hari";
import { bulan } from "../../../data/bulan";
import { tahun } from "../../../data/tahun";

import { formToShowActions } from "../../../features/formToShow-slice";
import { userDataActions } from "../../../features/userData-slice";
import { makeId } from "../../../helpers/makeId";

const PersonalDataForm = (props) => {
  const dispatch = useDispatch();

  // memanggil users state untuk mengetahui length nya, akan dipakai no urut id
  const allUser = useSelector((state) => state.users.users);

  // state error
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // semua state input
  const [namaDepan, setNamaDepan] = useState("");
  const [namaBelakang, setNamaBelakang] = useState("");
  const [email, setEmail] = useState("");
  const [tempatLhr, setTempatLhr] = useState("");
  const [hariLhr, setHariLhr] = useState("");
  const [bulanLhr, setBulanLhr] = useState("");
  const [tahunLhr, setTahunLhr] = useState("");
  const [gender, setGender] = useState("");
  const [alamat, setAlamat] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kota, setKota] = useState("");
  const [kewarganegaraan, setKewarganegaraan] = useState("");

  // semua event onChange state
  const changeNamaDepan = (event) => {
    setNamaDepan(event.target.value);
  };
  const changeNamaBelakang = (event) => {
    setNamaBelakang(event.target.value);
  };
  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changeTempatLhr = (event) => {
    setTempatLhr(event.target.value);
  };
  const changeHariLhr = (event) => {
    setHariLhr(event.target.value);
  };
  const changeBulanLhr = (event) => {
    setBulanLhr(event.target.value);
  };
  const changeTahunLhr = (event) => {
    setTahunLhr(event.target.value);
  };
  const changeGender = (event) => {
    setGender(event.target.value);
  };
  const changeAlamat = (event) => {
    setAlamat(event.target.value);
  };
  const changeKecamatan = (event) => {
    setKecamatan(event.target.value);
  };
  const changeKota = (event) => {
    setKota(event.target.value);
  };
  const changeKewarganegaraan = (event) => {
    setKewarganegaraan(event.target.value);
  };

  // submit handler form personal
  const nextButtonHandler = (event) => {
    event.preventDefault();

    const namaDepanIsValid = namaDepan.trim().length !== 0;
    const namaBelakangIsValid = namaBelakang.trim().length !== 0;
    const emailIsValid = email.includes("@");
    const tempatLahirIsValid = tempatLhr.trim().length !== 0;
    const hariLahirIsValid = hariLhr.trim().length !== 0;
    const bulanLahirIsValid = bulanLhr.trim().length !== 0;
    const tahunLahirIsValid = tahunLhr.trim().length !== 0;
    const genderIsValid = gender.trim().length !== 0;
    const alamatIsValid = alamat.trim().length !== 0;
    const kecamatanIsValid = kecamatan.trim().length !== 0;
    const kotaIsValid = kota.trim().length !== 0;
    const kewarganegaraanIsValid = kewarganegaraan.trim().length !== 0;

    let formIsValid;

    // memvalidasi seluruh inputan
    if (
      namaDepanIsValid &&
      namaBelakangIsValid &&
      emailIsValid &&
      tempatLahirIsValid &&
      hariLahirIsValid &&
      bulanLahirIsValid &&
      tahunLahirIsValid &&
      genderIsValid &&
      alamatIsValid &&
      kecamatanIsValid &&
      kotaIsValid &&
      kewarganegaraanIsValid
    ) {
      formIsValid = true;
    }

    if (!formIsValid) {
      setError(true);
      setErrorMessage("Seluruh form harus diisi!");
      return;
    }

    // membuat format id
    const id = makeId(allUser.length + 1);

    // membuat object user baru
    const userData = {
      id,
      namaDepan,
      namaBelakang,
      email,
      tempatLahir: tempatLhr,
      tanggalLahir: hariLhr,
      bulanLahir: bulanLhr,
      tahunLahir: tahunLhr,
      gender,
      alamat,
      kecamatan,
      kota,
      kewarganegaraan,
    };

    dispatch(userDataActions.addPersonal(userData));
    dispatch(formToShowActions.nextForm(2));
  };

  return (
    <form className="w-full" onSubmit={nextButtonHandler}>
      <div className="w-full mb-3 lg:flex justify-between items-center">
        <InputText
          id="namaD"
          label="Nama Depan"
          type="text"
          className=" w-full lg:w-[46.5%]"
          value={namaDepan}
          onChange={changeNamaDepan}
        />
        <InputText
          id="namaB"
          label="Nama Belakang"
          type="text"
          className="w-full lg:w-[46.5%]"
          value={namaBelakang}
          onChange={changeNamaBelakang}
        />
      </div>
      <InputText
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={changeEmail}
      />
      <div className="w-full mb-4 lg:flex lg:justify-between lg:items-center">
        <InputText
          id="tempatLhr"
          label="Tempat Lahir"
          type="text"
          className="lg:w-[30%] lg:mb-0"
          value={tempatLhr}
          onChange={changeTempatLhr}
        />
        <div className="w-full lg:w-[60%]">
          <p className="text-slate-100 font-light mb-3">Tanggal Lahir</p>
          <div className="w-full  flex justify-between">
            <SelectOption
              className="w-[30%]"
              name="hariLhr"
              label="Hari"
              options={hari}
              value={hariLhr}
              onChange={changeHariLhr}
            />
            <SelectOption
              className="w-[30%]"
              name="bulanLhr"
              label="Bulan"
              options={bulan}
              value={bulanLhr}
              onChange={changeBulanLhr}
            />
            <SelectOption
              className="w-[30%]"
              name="tahunLhr"
              label="Tahun"
              options={tahun}
              value={tahunLhr}
              onChange={changeTahunLhr}
            />
          </div>
        </div>
      </div>
      <div className="w-full mb-3">
        <p className="text-slate-100 font-light mb-2">Gender</p>
        <RadioButton
          className="mr-10"
          name="gender"
          id="laki-laki"
          value="laki-laki"
          label="Laki-laki"
          onChange={changeGender}
        />
        <RadioButton
          className="mr-10"
          name="gender"
          id="perempuan"
          value="perempuan"
          label="Perempuan"
          onChange={changeGender}
        />
      </div>
      <TextArea
        id="alamat"
        label="Alamat"
        value={alamat}
        onChange={changeAlamat}
      />
      <div className="w-full mb-3 lg:flex lg:justify-between lg:items-center">
        <InputText
          id="kecamatan"
          label="Kecamatan"
          type="text"
          className="w-full lg:w-[46.5%]"
          value={kecamatan}
          onChange={changeKecamatan}
        />
        <InputText
          id="kota"
          label="Kota"
          type="text"
          className="w-full lg:w-[46.5%]"
          value={kota}
          onChange={changeKota}
        />
      </div>
      <InputText
        id="kewarganegaraan"
        label="Kewarganegaraan"
        type="text"
        value={kewarganegaraan}
        onChange={changeKewarganegaraan}
      />
      {error && (
        <p className="text-left text-red-500 text-sm font-bold mt-5">
          {errorMessage}
        </p>
      )}
      <div className="w-full mt-8 lg:flex lg:justify-end lg:items-center">
        <Button
          className="w-full bg-tosca text-grey lg:w-[20%] hover:brightness-95"
          type="submit"
        >
          Next
        </Button>
      </div>
    </form>
  );
};

export default PersonalDataForm;
