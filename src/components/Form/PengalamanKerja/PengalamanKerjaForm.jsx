import InputText from "../../UI/InputText";
import SelectOption from "../../UI/SelectOption";
import TextArea from "../../UI/TextArea";

const PengalamanKerjaForm = (props) => {
  return (
    <div className="w-full mb-10 ">
      <InputText id="posisi" label="Posisi" type="text" />
      <InputText id="perusahaan" label="Nama Perusahaan" type="text" />
      <div className="w-full mb-3">
        <p className="text-slate-100 font-light mb-3">Lama Bekerja</p>
        <div className="w-full mb-3 flex justify-between items-center">
          <SelectOption
            name="tahunMsk"
            label="Tahun"
            options={[2022, 2021, 2020, 2019]}
            className="w-[45%]"
          />
          <SelectOption
            name="bulanMsk"
            label="Bulan"
            options={["Januari", "Februari", "Maret", "April"]}
            className="w-[45%]"
          />
        </div>
        <p className="text-slate-100 font-light mb-3 text-center">Sampai</p>
        <div className="w-full mb-3 flex justify-between items-center">
          <SelectOption
            name="tahunMsk"
            label="Tahun"
            options={[2022, 2021, 2020, 2019]}
            className="w-[45%]"
          />
          <SelectOption
            name="bulanMsk"
            label="Bulan"
            options={["Januari", "Februari", "Maret", "April"]}
            className="w-[45%]"
          />
        </div>
      </div>
      <InputText id="spesialisasi" label="Spesialisasi" type="text" />
      <InputText id="negara" label="Negara" type="text" />
      <div className="w-full mb-3">
        <p className="text-slate-100 font-light mb-3">Industri</p>
        <SelectOption
          name="industri"
          label="Industri"
          options={["Manufaktur", "Teknologi", "Kesehatan"]}
          className="w-full"
        />
      </div>
      <InputText id="jabatan" label="Jabatan" type="text" />
      <InputText id="gaji" label="Gaji Bulanan" type="number" />
      <TextArea id="keterangan" label="Keterangan" />
    </div>
  );
};

export default PengalamanKerjaForm;
