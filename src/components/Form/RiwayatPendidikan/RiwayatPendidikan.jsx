import Button from "../../UI/Button";
import RiwayatPendidikanForm from "./RiwayatPendidikanForm";
import AddLayout from "../../UI/AddLayout";

const RiwayatPendidikan = () => {
  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Riwayat Pendidikan
      </h2>
      <form className="w-full">
        <RiwayatPendidikanForm />
        <AddLayout />
        <div className="mt-8 lg:flex lg:justify-end lg:items-center">
          <Button
            className="bg-tosca w-full text-slate-100 lg:w-[20%] hover:brightness-95"
            typw="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RiwayatPendidikan;
