import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import AddLayout from "../../UI/AddLayout";
import InputText from "../../UI/InputText";
import SelectOption from "../../UI/SelectOption";
import { formToShowActions } from "../../../features/formToShow-slice";
import { userDataActions } from "../../../features/userData-slice";
import { tahun } from "../../../data/tahun";
import { jenjangPen } from "../../../data/jenjang";

const RiwayatPendidikan = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // state input
  const [institusi, setInstitusi] = useState("");
  const [nilaiAkhir, setNilaiAkhir] = useState("");
  const [indexNilai, setIndexNilai] = useState("");
  const [tempat, setTempat] = useState("");
  const [jenjang, setJenjang] = useState("");
  const [tahunLulus, setTahunLulus] = useState("");
  const [jurusan, setJurusan] = useState("");

  const [institusi2, setInstitusi2] = useState("");
  const [nilaiAkhir2, setNilaiAkhir2] = useState("");
  const [indexNilai2, setIndexNilai2] = useState("");
  const [tempat2, setTempat2] = useState("");
  const [jenjang2, setJenjang2] = useState("");
  const [tahunLulus2, setTahunLulus2] = useState("");
  const [jurusan2, setJurusan2] = useState("");

  // semua onchange state input
  const changeInstitusi = (event) => {
    setInstitusi(event.target.value);
  };
  const changeNilaiAkhir = (event) => {
    setNilaiAkhir(event.target.value);
  };
  const changeIndexNilai = (event) => {
    setIndexNilai(event.target.value);
  };
  const changeTempat = (event) => {
    setTempat(event.target.value);
  };
  const changeJenjang = (event) => {
    setJenjang(event.target.value);
  };
  const changeTahunLulus = (event) => {
    setTahunLulus(event.target.value);
  };
  const changeJurusan = (event) => {
    setJurusan(event.target.value);
  };

  const changeInstitusi2 = (event) => {
    setInstitusi2(event.target.value);
  };
  const changeNilaiAkhir2 = (event) => {
    setNilaiAkhir2(event.target.value);
  };
  const changeIndexNilai2 = (event) => {
    setIndexNilai2(event.target.value);
  };
  const changeTempat2 = (event) => {
    setTempat2(event.target.value);
  };
  const changeJenjang2 = (event) => {
    setJenjang2(event.target.value);
  };
  const changeTahunLulus2 = (event) => {
    setTahunLulus2(event.target.value);
  };
  const changeJurusan2 = (event) => {
    setJurusan2(event.target.value);
  };

  const content1 = (
    <div className="flex flex-col">
      <div>
        <InputText
          id="institusi"
          label="Institusi / Universitas"
          type="text"
          className="w-full"
          value={institusi}
          onChange={changeInstitusi}
        />
        <div className="w-full flex items-center justify-between">
          <InputText
            id="nilai"
            label="Nilai Akhir"
            type="number"
            className="w-[65%]"
            value={nilaiAkhir}
            onChange={changeNilaiAkhir}
          />
          <SelectOption
            className="w-[30%] mt-5"
            name="indeks"
            label="Indeks"
            options={[4, 10]}
            value={indexNilai}
            onChange={changeIndexNilai}
          />
        </div>
        <div className="w-full">
          <InputText
            id="tempat"
            label="Tempat / Kota"
            type="text"
            className="w-full"
            value={tempat}
            onChange={changeTempat}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between mb-3">
          <div className="w-[45%]">
            <p className="text-slate-100 font-light">Jenjang Pendidikan</p>
            <SelectOption
              className="w-full mt-3"
              name="jenjang"
              label="Jenjang/Strata"
              options={jenjangPen}
              value={jenjang}
              onChange={changeJenjang}
            />
          </div>
          <div className="w-[45%]">
            <p className="text-slate-100 font-light">Tahun Lulus</p>
            <SelectOption
              className="w-full mt-3"
              name="tahun"
              label="Tahun"
              options={tahun}
              value={tahunLulus}
              onChange={changeTahunLulus}
            />
          </div>
        </div>
        <InputText
          id="program"
          label="Jurusuan / Program Studi"
          type="text"
          value={jurusan}
          onChange={changeJurusan}
        />
      </div>
    </div>
  );

  const content2 = (
    <div className="flex flex-col">
      <div className="mt-14 lg:mt-0">
        <InputText
          id="institusi2"
          label="Institusi / Universitas"
          type="text"
          className="w-full"
          value={institusi2}
          onChange={changeInstitusi2}
        />
        <div className="w-full flex items-center justify-between">
          <InputText
            id="nilai2"
            label="Nilai Akhir"
            type="number"
            className="w-[65%]"
            value={nilaiAkhir2}
            onChange={changeNilaiAkhir2}
          />
          <SelectOption
            className="w-[30%] mt-5"
            name="indeks"
            label="Indeks"
            options={[4, 10]}
            value={indexNilai2}
            onChange={changeIndexNilai2}
          />
        </div>
        <div className="w-full">
          <InputText
            id="tempat2"
            label="Tempat / Kota"
            type="text"
            className="w-full"
            value={tempat2}
            onChange={changeTempat2}
          />
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex justify-between mb-3">
          <div className="w-[45%]">
            <p className="text-slate-100 font-light">Jenjang Pendidikan</p>
            <SelectOption
              className="w-full mt-3"
              name="jenjang"
              label="Jenjang/Strata"
              options={jenjangPen}
              value={jenjang2}
              onChange={changeJenjang2}
            />
          </div>
          <div className="w-[45%]">
            <p className="text-slate-100 font-light">Tahun Lulus</p>
            <SelectOption
              className="w-full mt-3"
              name="tahun"
              label="Tahun"
              options={tahun}
              value={tahunLulus2}
              onChange={changeTahunLulus2}
            />
          </div>
        </div>
        <InputText
          id="program"
          label="Jurusuan / Program Studi"
          type="text"
          value={jurusan2}
          onChange={changeJurusan2}
        />
      </div>
    </div>
  );

  const dispatch = useDispatch();

  const [showSecondForm, setShowSecondForm] = useState(false);

  const nextButtonHandler = (event) => {
    event.preventDefault();

    if (!showSecondForm) {
      const institusiIsValid = institusi.trim().length !== 0;
      const nilaiAkhirIsValid = nilaiAkhir.trim().length !== 0;
      const indexNilaiIsValid = indexNilai.trim().length !== 0;
      const jenjangIsValid = jenjang.trim().length !== 0;
      const tahunLulusIsValid = tahunLulus.trim().length !== 0;
      const jurusanIsValid = jurusan.trim().length !== 0;

      let formIsValid;

      if (
        institusiIsValid &&
        nilaiAkhirIsValid &&
        indexNilaiIsValid &&
        jenjangIsValid &&
        tahunLulusIsValid &&
        jurusanIsValid
      ) {
        formIsValid = true;
      } else {
        formIsValid = false;
      }

      if (!formIsValid) {
        setError(true);
        setErrorMessage("Seluruh Form harus diisi!");
        return;
      }

      // membuat object riwayat pendidikan
      const riwayatPendidikan = {
        id: (Math.random() + 1).toString(),
        institusi,
        nilaiAkhir,
        indexNilai,
        jenjangPendidikan: jenjang,
        tahunLulus,
        jurusan,
      };

      dispatch(userDataActions.addPendidikan(riwayatPendidikan));
      dispatch(formToShowActions.nextForm(3));
    } else {
      const institusiIsValid = institusi.trim().length !== 0;
      const nilaiAkhirIsValid = nilaiAkhir.trim().length !== 0;
      const indexNilaiIsValid = indexNilai.trim().length !== 0;
      const jenjangIsValid = jenjang.trim().length !== 0;
      const tahunLulusIsValid = tahunLulus.trim().length !== 0;
      const jurusanIsValid = jurusan.trim().length !== 0;

      const institusiIsValid2 = institusi2.trim().length !== 0;
      const nilaiAkhirIsValid2 = nilaiAkhir2.trim().length !== 0;
      const indexNilaiIsValid2 = indexNilai2.trim().length !== 0;
      const jenjangIsValid2 = jenjang2.trim().length !== 0;
      const tahunLulusIsValid2 = tahunLulus2.trim().length !== 0;
      const jurusanIsValid2 = jurusan2.trim().length !== 0;

      let formIsValid;

      if (
        institusiIsValid &&
        nilaiAkhirIsValid &&
        indexNilaiIsValid &&
        jenjangIsValid &&
        tahunLulusIsValid &&
        jurusanIsValid &&
        institusiIsValid2 &&
        nilaiAkhirIsValid2 &&
        indexNilaiIsValid2 &&
        jenjangIsValid2 &&
        tahunLulusIsValid2 &&
        jurusanIsValid2
      ) {
        formIsValid = true;
      } else {
        formIsValid = false;
      }

      if (!formIsValid) {
        setError(true);
        setErrorMessage("Seluruh Form harus diisi!");
        return;
      }

      // membuat object riwayat pendidikan
      const riwayatPendidikan = {
        id: (Math.random() + 1).toString(),
        institusi,
        nilaiAkhir,
        indexNilai,
        jenjangPendidikan: jenjang,
        tahunLulus,
        jurusan,
      };

      const riwayatPendidikan2 = {
        id: (Math.random() + 1).toString(),
        institusi: institusi2,
        nilaiAkhir: nilaiAkhir2,
        indexNilai: indexNilai2,
        jenjangPendidikan: jenjang2,
        tahunLulus: tahunLulus2,
        jurusan: jurusan2,
      };

      dispatch(userDataActions.addPendidikan(riwayatPendidikan));
      dispatch(userDataActions.addPendidikan(riwayatPendidikan2));

      dispatch(formToShowActions.nextForm(3));
    }
  };

  const showSecondFormHandler = () => {
    setShowSecondForm(true);
  };

  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Riwayat Pendidikan
      </h2>
      <form className="w-full" onSubmit={nextButtonHandler}>
        <div className="w-full lg:flex lg:justify-between lg:items-center">
          {content1}
          {!showSecondForm && <AddLayout onClick={showSecondFormHandler} />}
          {showSecondForm && content2}
        </div>
        {error && <p className="text-red-400 font-bold mt-5">{errorMessage}</p>}
        <div className="mt-8 lg:flex lg:justify-end lg:items-center">
          <Button
            className="bg-tosca w-full text-grey lg:w-[20%] hover:brightness-95"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RiwayatPendidikan;
