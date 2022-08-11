import PengalamanKerjaForm from "./PengalamanKerjaForm";
import Button from "../../UI/Button";
import AddLayout from "../../UI/AddLayout";

const PengalamanKerja = () => {
  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Pengalaman Kerja
      </h2>
      <form className="w-full">
        <PengalamanKerjaForm />
        <AddLayout />
        <div className="mt-8 lg:flex lg:justify-end lg:items-center">
          <Button
            className="bg-tosca w-full text-slate-100 lg:w-[20%]"
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
