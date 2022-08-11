import InputText from "../../UI/InputText";
import RadioButton from "../../UI/RadioButton";
import SelectOption from "../../UI/SelectOption";
import TextArea from "../../UI/TextArea";
import { hari } from "../../../data/hari";
import { bulan } from "../../../data/bulan";
import { tahun } from "../../../data/tahun";

const PersonalDataForm = (props) => {
  return (
    <div className="w-full">
      <div className="w-full mb-3 lg:flex justify-between items-center">
        <InputText
          id="namaD"
          label="Nama Depan"
          type="text"
          className=" w-full lg:w-[46.5%]"
        />
        <InputText
          id="namaB"
          label="Nama Belakang"
          type="text"
          className="w-full lg:w-[46.5%]"
        />
      </div>
      <InputText id="email" label="Email" type="email" />
      <div className="w-full mb-4 lg:flex lg:justify-between lg:items-center">
        <InputText
          id="tempatLhr"
          label="Tempat Lahir"
          type="text"
          className="lg:w-[30%] lg:mb-0"
        />
        <div className="w-full lg:w-[60%]">
          <p className="text-slate-100 font-light mb-3">Tanggal Lahir</p>
          <div className="w-full  flex justify-between">
            <SelectOption
              className="w-[30%]"
              name="hariLhr"
              label="Hari"
              options={hari}
            />
            <SelectOption
              className="w-[30%]"
              name="bulanLhr"
              label="Bulan"
              options={bulan}
            />
            <SelectOption
              className="w-[30%]"
              name="tahunLhr"
              label="Tahun"
              options={tahun}
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
        />
        <RadioButton
          className="mr-10"
          name="gender"
          id="perempuan"
          value="perempuan"
          label="Perempuan"
        />
      </div>
      <TextArea id="alamat" label="Alamat" />
      <div className="w-full mb-3 lg:flex lg:justify-between lg:items-center">
        <InputText
          id="kecamatan"
          label="Kecamatan"
          type="text"
          className="w-full lg:w-[46.5%]"
        />
        <InputText
          id="kota"
          label="Kota"
          type="text"
          className="w-full lg:w-[46.5%]"
        />
      </div>
      <InputText id="kewarganegaraan" label="Kewarganegaraan" type="text" />
    </div>
  );
};

export default PersonalDataForm;
