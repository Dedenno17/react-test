import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import TableData from "../components/TableData/TableData";
import Button from "../components/UI/Button";
import { userDataActions } from "../features/userData-slice";
import { formToShowActions } from "../features/formToShow-slice";
import { usersActions } from "../features/users-slice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moveToSubmissionFormHandler = () => {
    dispatch(formToShowActions.resetForm());
    dispatch(userDataActions.deleteData());

    navigate("/add");
  };

  useEffect(() => {
    const allUsers = JSON.parse(window.localStorage.getItem("users"));
    dispatch(usersActions.setUsers(allUsers));
  }, [dispatch]);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center px-4 lg:w-[1024px] lg:m-auto">
      <div className="flex flex-col justify-between items-center py-4 w-full mt-6 md:flex-row">
        <h1 className="text-4xl font-bold text-grey mb-8 md:w-[70%] md:mb-0">
          Teravin test React.js
        </h1>
        <Button
          className="bg-grey text-slate-100 w-full md:w-[20%] lg:w-[15%]"
          type="button"
          onClick={moveToSubmissionFormHandler}
        >
          + Add
        </Button>
      </div>
      <TableData />
    </div>
  );
};

export default Home;
