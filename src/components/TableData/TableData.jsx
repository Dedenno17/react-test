const DUMMY__DATA = [
  { id: "p1", name: "Jackson", alamat: "Serdang" },
  { id: "p2", name: "Lily", alamat: "Nalagati" },
  { id: "p3", name: "Ross", alamat: "Pabuaran" },
];

const TableData = () => {
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
          {DUMMY__DATA.map((item, i) => (
            <tr
              key={item.id}
              className={
                i % 2 === 0
                  ? "bg-[#f2f2f2] hover:bg-[#ddd]"
                  : "bg-slate-100 hover:bg-[#ddd]"
              }
            >
              <td className="border-[1px] border-[#ddd] p-2">{item.id}</td>
              <td className="border-[1px] border-[#ddd] p-2">{item.name}</td>
              <td className="border-[1px] border-[#ddd] p-2">{item.alamat}</td>
              <td className="border-[1px] border-[#ddd] p-2  text-center">
                <i className="fa-solid fa-eye cursor-pointer"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
