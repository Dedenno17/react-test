import { useState } from "react";
import { useDispatch } from "react-redux";

import Button from "../../UI/Button";
import PersonalDataForm from "./PersonalDataForm";
import { formToShowActions } from "../../../features/formToShow-slice";
import { userDataActions } from "../../../features/userData-slice";

const PersonalData = () => {
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({});

  const userDataHandler = (data) => {
    setUserData(data);
  };

  const nextButtonHandler = (event) => {
    event.preventDefault();

    dispatch(userDataActions.addPersonal(userData));
    dispatch(formToShowActions.nextForm());
  };

  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Personal Data
      </h2>
      <form className="w-full" onSubmit={nextButtonHandler}>
        <PersonalDataForm onSetUser={userDataHandler} />
        <div className="w-full mt-8 lg:flex lg:justify-end lg:items-center">
          <Button
            className="w-full bg-tosca text-grey lg:w-[20%] hover:brightness-95"
            type="submit"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
