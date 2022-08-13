import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../UI/Button";

import HeadUser from "./HeadUser";
import KeahlianUser from "./KeahlianUser";
import PendidikanUser from "./PendidikanUser";
import PengalamanUser from "./PengalamanUser";

const DetailUSer = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState(undefined);

  useEffect(() => {
    const allUser = JSON.parse(window.localStorage.getItem("users"));
    const thisUsers = Array.from(allUser).filter((item) => item.id === id);
    setDataUser(thisUsers[0]);
  }, []);

  return (
    <div className="w-full">
      {dataUser ? <HeadUser dataUser={dataUser} /> : null}
      {dataUser ? <PengalamanUser dataUser={dataUser} /> : null}
      {dataUser ? <PendidikanUser dataUser={dataUser} /> : null}
      {dataUser ? <KeahlianUser dataUser={dataUser} /> : null}
      <div className="w-full flex justify-end items-center mt-8">
        <Button
          type="button"
          className="bg-tosca text-grey"
          onClick={() => navigate("/")}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default DetailUSer;
