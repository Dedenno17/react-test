import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import RiwayatPendidikanForm from "./RiwayatPendidikanForm";
import AddLayout from "../../UI/AddLayout";
import { formToShowActions } from "../../../features/formToShow-slice";

const RiwayatPendidikan = () => {
  const dispatch = useDispatch();

  const nextButtonHandler = (event) => {
    event.preventDefault();

    dispatch(formToShowActions.nextForm());
  };

  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Riwayat Pendidikan
      </h2>
      <form className="w-full" onSubmit={nextButtonHandler}>
        <div className="w-full lg:flex lg:justify-between lg:items-center">
          <RiwayatPendidikanForm />
          <AddLayout />
        </div>
        <div className="mt-8 lg:flex lg:justify-end lg:items-center">
          <Button
            className="bg-tosca w-full text-grey lg:w-[20%] hover:brightness-95"
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
