import { useDispatch } from "react-redux";

import PengalamanKerjaForm from "./PengalamanKerjaForm";
import Button from "../../UI/Button";
import AddLayout from "../../UI/AddLayout";
import { formToShowActions } from "../../../features/formToShow-slice";

const PengalamanKerja = () => {
  const dispatch = useDispatch();

  const nextButtonHandler = (event) => {
    event.preventDefault();

    dispatch(formToShowActions.nextForm());
  };

  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Pengalaman Kerja
      </h2>
      <form className="w-full" onSubmit={nextButtonHandler}>
        <div className="w-full lg:flex lg:justify-between lg:items-center">
          <PengalamanKerjaForm />
          <AddLayout />
        </div>
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
