import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../../UI/Button";
import KeahlianList from "./KeahlianList";
import { userDataActions } from "../../../features/userData-slice";
import { usersActions } from "../../../features/users-slice";

const Keahlian = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData.data);
  const users = useSelector((state) => state.users.users);

  const [keahlian, setKeahlian] = useState([]);
  const [keahlianInput, setKeahlianInput] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const changeKeahlianInput = (event) => {
    setKeahlianInput(event.target.value);
  };

  const tambahKeahlian = (event) => {
    event.preventDefault();

    setKeahlian((prevState) => {
      return [...prevState, keahlianInput];
    });
  };

  const nextButtonHandler = () => {
    if (keahlian.length === 0) {
      setError(true);
      setErrorMessage("Setidaknya masukan satu keahlian");
      return;
    }

    // memasukan keahlian ke userData
    dispatch(userDataActions.addKeahlian(keahlian));

    setTimeout(() => {
      // memasukan userData ke users global
      dispatch(usersActions.addUsers(userData));

      console.log("user");
    }, 500);

    setTimeout(() => {
      // meridirect ke halaman home
      navigate("/");
    }, 800);
  };

  useEffect(() => {
    //memasukannya ke local storage
    window.localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <div>
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Keahlian
      </h2>
      <form
        className="w-full lg:flex lg:justify-between lg:items-center"
        onSubmit={tambahKeahlian}
      >
        <input
          type="text"
          placeholder="Input skill"
          className="w-full px-3 py-3 rounded-md outline-none border-none mb-3 lg:w-[65%] lg:mb-0"
          value={keahlianInput}
          onChange={changeKeahlianInput}
        />
        <div className="w-full lg:w-[30%]">
          <Button
            className="bg-blue w-full text-slate-100 hover:brightness-95"
            type="submit"
          >
            + Add another skill
          </Button>
        </div>
      </form>
      {keahlian.length === 0 && !error && (
        <p className="text-center text-slate-800 font-bold mt-5">
          Belum ada keahlian
        </p>
      )}
      {error && keahlian.length === 0 && (
        <p className="text-center text-red-400 font-bold mt-5">
          {errorMessage}
        </p>
      )}
      {keahlian.length !== 0 && <KeahlianList data={keahlian} />}
      <div className="mt-8 lg:flex lg:justify-end lg:items-center">
        <Button
          className="bg-tosca w-full text-grey lg:w-[20%]"
          type="button"
          onClick={nextButtonHandler}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Keahlian;
