import Button from "../UI/Button";
import InputText from "../UI/InputText";
import RadioButton from "../UI/RadioButton";
import SelectOption from "../UI/SelectOption";

const PersonalData = () => {
  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Personal Data
      </h2>
      <form className="w-full">
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
        <div className="flex flex-col mb-3">
          <label htmlFor="alamat" className="text-slate-100 font-light mb-3">
            Alamat
          </label>
          <textarea
            id="alamat"
            cols="20"
            rows="5"
            className="w-full p-3 rounded-md"
          ></textarea>
        </div>
        <div className="w-full mb-3">
          <InputText id="kecamatan" label="Kecamatan" type="text" />
          <InputText id="kota" label="Kota" type="text" />
        </div>
        <InputText id="kewarganegaraan" label="Kewarganegaraan" type="text" />
        <div className="w-full mt-8">
          <Button className="w-full bg-tosca text-grey">Next</Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
