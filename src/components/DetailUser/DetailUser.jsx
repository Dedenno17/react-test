import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import HeadUser from "./HeadUser";
import KeahlianUser from "./KeahlianUser";
import PendidikanUser from "./PendidikanUser";
import PengalamanUser from "./PengalamanUser";

const DetailUSer = () => {
  const id = useParams();

  const users = useSelector((state) => state.users.users);
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    const thisUsers = users.filter((item) => item.id === id);
    setDataUser(thisUsers[0]);
  }, []);

  console.log(dataUser);
  return (
    <div className="w-full">
      <HeadUser dataUser={dataUser} />
      <PengalamanUser dataUser={dataUser} />
      <PendidikanUser dataUser={dataUser} />
      <KeahlianUser dataUser={dataUser} />
    </div>
  );
};

export default DetailUSer;
