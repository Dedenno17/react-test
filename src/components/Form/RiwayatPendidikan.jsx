import InputText from "../UI/InputText";
import SelectOption from "../UI/SelectOption";
import Button from "../UI/Button";

const RiwayatPendidikan = () => {
  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Riwayat Pendidikan
      </h2>
      <form className="w-full">
        <div>
          <InputText
            id="institusi"
            label="Institusi / Universitas"
            type="text"
            className="w-full"
          />
          <div className="w-full flex items-center justify-between">
            <InputText
              id="institusi"
              label="Nilai Akhir"
              type="number"
              className="w-[65%]"
            />
            <SelectOption
              className="w-[30%] mt-5"
              name="indeks"
              label="Indeks"
              options={[4, 10]}
            />
          </div>
          <div className="w-full">
            <InputText
              id="tempat"
              label="Tempat / Kota"
              type="text"
              className="w-full"
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
                options={["S3", "S2", "S1"]}
              />
            </div>
            <div className="w-[45%]">
              <p className="text-slate-100 font-light">Tahun Lulus</p>
              <SelectOption
                className="w-full mt-3"
                name="jenjang"
                label="Tahun"
                options={["2020", "2021", "2022"]}
              />
            </div>
          </div>
          <InputText
            id="program"
            label="Jurusuan / Program Studi"
            type="text"
          />
        </div>
        <div className="w-full mt-8">
          <Button className="w-full bg-tosca text-grey" type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RiwayatPendidikan;
