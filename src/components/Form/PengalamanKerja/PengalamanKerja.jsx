import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import AddLayout from "../../UI/AddLayout";
import InputText from "../../UI/InputText";
import SelectOption from "../../UI/SelectOption";
import { formToShowActions } from "../../../features/formToShow-slice";
import { userDataActions } from "../../../features/userData-slice";

import { tahun } from "../../../data/tahun";
import { bulan } from "../../../data/bulan";

const PengalamanKerja = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // state input
  const [posisi, setPosisi] = useState("");
  const [perusahaan, setPerusahaan] = useState("");
  const [tahunMasuk, setTahunMasuk] = useState("");
  const [bulanMasuk, setBulanMasuk] = useState("");
  const [tahunKeluar, setTahunKeluar] = useState("");
  const [bulanKeluar, setBulanKeluar] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [gaji, setGaji] = useState("");

  const [posisi2, setPosisi2] = useState("");
  const [perusahaan2, setPerusahaan2] = useState("");
  const [tahunMasuk2, setTahunMasuk2] = useState("");
  const [bulanMasuk2, setBulanMasuk2] = useState("");
  const [tahunKeluar2, setTahunKeluar2] = useState("");
  const [bulanKeluar2, setBulanKeluar2] = useState("");
  const [jabatan2, setJabatan2] = useState("");
  const [gaji2, setGaji2] = useState("");

  // semua onchange state input
  const changePosisi = (event) => {
    setPosisi(event.target.value);
  };
  const changePerusahaan = (event) => {
    setPerusahaan(event.target.value);
  };
  const changeTahunMasuk = (event) => {
    setTahunMasuk(event.target.value);
  };
  const changeBulanMasuk = (event) => {
    setBulanMasuk(event.target.value);
  };
  const changeTahunKeluar = (event) => {
    setTahunKeluar(event.target.value);
  };
  const changeBulanKeluar = (event) => {
    setBulanKeluar(event.target.value);
  };
  const changeJabatan = (event) => {
    setJabatan(event.target.value);
  };
  const changeGaji = (event) => {
    setGaji(event.target.value);
  };

  const changePosisi2 = (event) => {
    setPosisi2(event.target.value);
  };
  const changePerusahaan2 = (event) => {
    setPerusahaan2(event.target.value);
  };
  const changeTahunMasuk2 = (event) => {
    setTahunMasuk2(event.target.value);
  };
  const changeBulanMasuk2 = (event) => {
    setBulanMasuk2(event.target.value);
  };
  const changeTahunKeluar2 = (event) => {
    setTahunKeluar2(event.target.value);
  };
  const changeBulanKeluar2 = (event) => {
    setBulanKeluar2(event.target.value);
  };
  const changeJabatan2 = (event) => {
    setJabatan2(event.target.value);
  };
  const changeGaji2 = (event) => {
    setGaji2(event.target.value);
  };

  const content1 = (
    <>
      <InputText
        id="posisi"
        label="Posisi"
        type="text"
        value={posisi}
        onChange={changePosisi}
      />
      <InputText
        id="perusahaan"
        label="Nama Perusahaan"
        type="text"
        value={perusahaan}
        onChange={changePerusahaan}
      />
      <div className="w-full mb-3">
        <p className="text-slate-100 font-light mb-3">Lama Bekerja</p>
        <div className="w-full mb-3 flex justify-between items-center">
          <SelectOption
            name="tahunMsk"
            label="Tahun"
            options={tahun}
            className="w-[45%]"
            onChange={changeTahunMasuk}
            value={tahunMasuk}
          />
          <SelectOption
            name="bulanMsk"
            label="Bulan"
            options={bulan}
            className="w-[45%]"
            value={bulanMasuk}
            onChange={changeBulanMasuk}
          />
        </div>
        <p className="text-slate-100 font-light mb-3 text-center">Sampai</p>
        <div className="w-full mb-3 flex justify-between items-center">
          <SelectOption
            name="tahunKlr"
            label="Tahun"
            options={tahun}
            className="w-[45%]"
            value={tahunKeluar}
            onChange={changeTahunKeluar}
          />
          <SelectOption
            name="bulanKlr"
            label="Bulan"
            options={bulan}
            className="w-[45%]"
            value={bulanKeluar}
            onChange={changeBulanKeluar}
          />
        </div>
      </div>
      <InputText
        id="jabatan"
        label="Jabatan"
        type="text"
        value={jabatan}
        onChange={changeJabatan}
      />
      <InputText
        id="gaji"
        label="Gaji Bulanan"
        type="number"
        value={gaji}
        onChange={changeGaji}
      />
    </>
  );

  const content2 = (
    <>
      <InputText
        id="posisi"
        label="Posisi"
        type="text"
        value={posisi2}
        onChange={changePosisi2}
        className="mt-14 lg:mt-0"
      />
      <InputText
        id="perusahaan"
        label="Nama Perusahaan"
        type="text"
        value={perusahaan2}
        onChange={changePerusahaan2}
      />
      <div className="w-full mb-3">
        <p className="text-slate-100 font-light mb-3">Lama Bekerja</p>
        <div className="w-full mb-3 flex justify-between items-center">
          <SelectOption
            name="tahunMsk"
            label="Tahun"
            options={tahun}
            className="w-[45%]"
            onChange={changeTahunMasuk2}
            value={tahunMasuk2}
          />
          <SelectOption
            name="bulanMsk"
            label="Bulan"
            options={bulan}
            className="w-[45%]"
            value={bulanMasuk2}
            onChange={changeBulanMasuk2}
          />
        </div>
        <p className="text-slate-100 font-light mb-3 text-center">Sampai</p>
        <div className="w-full mb-3 flex justify-between items-center">
          <SelectOption
            name="tahunKlr"
            label="Tahun"
            options={tahun}
            className="w-[45%]"
            value={tahunKeluar2}
            onChange={changeTahunKeluar2}
          />
          <SelectOption
            name="bulanKlr"
            label="Bulan"
            options={bulan}
            className="w-[45%]"
            value={bulanKeluar2}
            onChange={changeBulanKeluar2}
          />
        </div>
      </div>
      <InputText
        id="jabatan"
        label="Jabatan"
        type="text"
        value={jabatan2}
        onChange={changeJabatan2}
      />
      <InputText
        id="gaji"
        label="Gaji Bulanan"
        type="number"
        value={gaji2}
        onChange={changeGaji2}
      />
    </>
  );

  const dispatch = useDispatch();

  const [showSecondForm, setShowSecondForm] = useState(false);

  const nextButtonHandler = (event) => {
    event.preventDefault();

    if (!showSecondForm) {
      const posisiIsValid = posisi.trim().length !== 0;
      const perusahaanIsValid = perusahaan.trim().length !== 0;
      const tahunMasukIsValid = tahunMasuk.trim().length !== 0;
      const bulanMasukIsValid = bulanMasuk.trim().length !== 0;
      const tahunKeluarIsValid = tahunKeluar.trim().length !== 0;
      const bulanKeluarIsValid = bulanKeluar.trim().length !== 0;
      const jabatanIsValid = jabatan.trim().length !== 0;
      const gajiIsValid = gaji.trim().length !== 0;

      let formIsValid;

      if (
        posisiIsValid &&
        perusahaanIsValid &&
        tahunMasukIsValid &&
        bulanMasukIsValid &&
        tahunKeluarIsValid &&
        bulanKeluarIsValid &&
        jabatanIsValid &&
        gajiIsValid
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
      const pengalamanKerja = {
        id: (Math.random() + 1).toString(),
        posisi,
        namaPerusahaan: perusahaan,
        masuk: { bulanMasuk, tahunMasuk },
        keluar: { bulanKeluar, tahunKeluar },
        jabatan: jabatan,
        gaji: gaji,
      };

      dispatch(userDataActions.addPengalaman(pengalamanKerja));
      dispatch(formToShowActions.nextForm(4));
    } else {
      const posisiIsValid = posisi.trim().length !== 0;
      const perusahaanIsValid = perusahaan.trim().length !== 0;
      const tahunMasukIsValid = tahunMasuk.trim().length !== 0;
      const bulanMasukIsValid = bulanMasuk.trim().length !== 0;
      const tahunKeluarIsValid = tahunKeluar.trim().length !== 0;
      const bulanKeluarIsValid = bulanKeluar.trim().length !== 0;
      const jabatanIsValid = jabatan.trim().length !== 0;
      const gajiIsValid = gaji.trim().length !== 0;

      const posisiIsValid2 = posisi2.trim().length !== 0;
      const perusahaanIsValid2 = perusahaan2.trim().length !== 0;
      const tahunMasukIsValid2 = tahunMasuk2.trim().length !== 0;
      const bulanMasukIsValid2 = bulanMasuk2.trim().length !== 0;
      const tahunKeluarIsValid2 = tahunKeluar2.trim().length !== 0;
      const bulanKeluarIsValid2 = bulanKeluar2.trim().length !== 0;
      const jabatanIsValid2 = jabatan2.trim().length !== 0;
      const gajiIsValid2 = gaji2.trim().length !== 0;

      let formIsValid;

      if (
        posisiIsValid &&
        perusahaanIsValid &&
        tahunMasukIsValid &&
        bulanMasukIsValid &&
        tahunKeluarIsValid &&
        bulanKeluarIsValid &&
        jabatanIsValid &&
        gajiIsValid &&
        posisiIsValid2 &&
        perusahaanIsValid2 &&
        tahunMasukIsValid2 &&
        bulanMasukIsValid2 &&
        tahunKeluarIsValid2 &&
        bulanKeluarIsValid2 &&
        jabatanIsValid2 &&
        gajiIsValid2
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
      const pengalamanKerja = {
        id: (Math.random() + 1).toString(),
        posisi,
        namaPerusahaan: perusahaan,
        masuk: { bulanMasuk, tahunMasuk },
        keluar: { bulanKeluar, tahunKeluar },
        jabatan: jabatan,
        gaji: gaji,
      };

      const pengalamanKerja2 = {
        id: (Math.random() + 1).toString(),
        posisi: posisi2,
        namaPerusahaan: perusahaan2,
        masuk: { bulanMasuk: bulanMasuk2, tahunMasuk: tahunMasuk2 },
        keluar: { bulanKeluar: bulanKeluar2, tahunKeluar: tahunKeluar2 },
        jabatan: jabatan2,
        gaji: gaji2,
      };

      dispatch(userDataActions.addPengalaman(pengalamanKerja));
      dispatch(userDataActions.addPengalaman(pengalamanKerja2));
      dispatch(formToShowActions.nextForm(4));
    }
  };

  const showSecondFormHandler = () => {
    setShowSecondForm(true);
  };

  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Pengalaman Kerja
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
            className="bg-tosca w-full text-grey lg:w-[20%]"
            typw="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PengalamanKerja;
