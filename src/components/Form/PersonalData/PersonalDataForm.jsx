import InputText from "../../UI/InputText";
import RadioButton from "../../UI/RadioButton";
import SelectOption from "../../UI/SelectOption";
import TextArea from "../../UI/TextArea";

const PersonalDataForm = (props) => {
  return (
    <div className="w-full">
      <div className="w-full mb-3">
        <InputText id="namaD" label="Nama Depan" type="text" />
        <InputText id="namaB" label="Nama Belakang" type="text" />
      </div>
      <InputText id="email" label="Email" type="email" />
      <div className="w-full mb-4">
        <InputText id="tempatLhr" label="Tempat Lahir" type="text" />
        <div className="w-full">
          <p className="text-slate-100 font-light mb-3">Tanggal Lahir</p>
          <div className="w-full  flex justify-between">
            <SelectOption
              className="w-[30%]"
              name="hariLhr"
              label="Hari"
              options={["1", "2", "3"]}
            />
            <SelectOption
              className="w-[30%]"
              name="bulanLhr"
              label="Bulan"
              options={["Januari", "Februari", "Maret"]}
            />
            <SelectOption
              className="w-[30%]"
              name="tahunLhr"
              label="Tahun"
              options={["2020", "2021", "2022"]}
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
      <div className="w-full mb-3">
        <InputText id="kecamatan" label="Kecamatan" type="text" />
        <InputText id="kota" label="Kota" type="text" />
      </div>
      <InputText id="kewarganegaraan" label="Kewarganegaraan" type="text" />
    </div>
  );
};

export default PersonalDataForm;
