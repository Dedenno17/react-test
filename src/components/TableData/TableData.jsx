import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TableData = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const allUser = JSON.parse(window.localStorage.getItem("users"));
    setUsers(allUser);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="w-full">
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border-[1px] border-[#ddd] py-3 px-2 text-center bg-grey text-slate-100 w-[20%] md:w-[15%]">
              ID No.
            </th>
            <th className="border-[1px] border-[#ddd] py-3 px-2 text-center bg-grey text-slate-100 w-[30%]">
              Nama
            </th>
            <th className="border-[1px] border-[#ddd] py-3 px-2 text-center bg-grey text-slate-100 w-[35%]">
              Alamat
            </th>
            <th className="border-[1px] border-[#ddd] py-3 px-2 text-center bg-grey text-slate-100 w-[15%]"></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, i) => (
            <tr
              key={item.id}
              className={
                i % 2 === 0
                  ? "bg-[#f2f2f2] hover:bg-[#ddd]"
                  : "bg-slate-100 hover:bg-[#ddd]"
              }
            >
              <td className="border-[1px] border-[#ddd] p-2">{item.id}</td>
              <td className="border-[1px] border-[#ddd] p-2">
                {item.namaDepan} {item.namaBelakang}
              </td>
              <td className="border-[1px] border-[#ddd] p-2">{item.alamat}</td>
              <td className="border-[1px] border-[#ddd] p-2  text-center">
                <i
                  className="fa-solid fa-eye cursor-pointer"
                  onClick={() => navigate(`/users/${item.id}`)}
                ></i>
              </td>
            </tr>
          ))}
          {!users && (
            <tr className="bg-slate-100  text-slate-400">
              <td colSpan="4" className="p-4 text-center">
                Belum ada users
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
