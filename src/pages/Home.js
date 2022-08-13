import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import TableData from "../components/TableData/TableData";
import Button from "../components/UI/Button";
import { userDataActions } from "../features/userData-slice";

const Home = () => {
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(users);
    dispatch(userDataActions.deleteData());
  }, [users, dispatch]);

  return (
    <div className="w-full h-[100vh] flex flex-col items-center px-4 lg:w-[1024px] lg:m-auto">
      <div className="flex flex-col justify-between items-center py-4 w-full mt-6 md:flex-row">
        <h1 className="text-4xl font-bold text-grey mb-8 md:w-[70%] md:mb-0">
          Teravin test React.js
        </h1>
        <Button
          className="bg-grey text-slate-100 w-full md:w-[20%] lg:w-[15%]"
          type="button"
        >
          + Add
        </Button>
      </div>
      <TableData />
    </div>
  );
};

export default Home;
