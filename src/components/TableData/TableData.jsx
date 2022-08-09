const DUMMY__DATA = [
  { id: "p1", name: "Jackson", alamat: "Serdang" },
  { id: "p2", name: "Lily", alamat: "Nalagati" },
  { id: "p3", name: "Ross", alamat: "Pabuaran" },
];

const TableData = () => {
  return (
    <div className="w-[790px]">
      <table className="border-collapse w-full">
        <tr>
          <th className="border-[1px] border-[#ddd] py-3 px-2 text-left bg-tosca text-slate-100 w-[120px]">
            ID No.
          </th>
          <th className="border-[1px] border-[#ddd] py-3 px-2 text-left bg-tosca text-slate-100 w-[170px]">
            Nama
          </th>
          <th className="border-[1px] border-[#ddd] py-3 px-2 text-left bg-tosca text-slate-100">
            Alamat
          </th>
          <th className="border-[1px] border-[#ddd] py-3 px-2 text-left bg-tosca text-slate-100 w-[80px]"></th>
        </tr>
        {DUMMY__DATA.map((item, i) => (
          <tr
            key={item.id}
            className={
              i % 2 === 0 ? "bg-[#f2f2f2] hover:bg-[#ddd]" : "hover:bg-[#ddd]"
            }
          >
            <td className="border-[1px] border-[#ddd] p-2">{item.id}</td>
            <td className="border-[1px] border-[#ddd] p-2">{item.name}</td>
            <td className="border-[1px] border-[#ddd] p-2">{item.alamat}</td>
            <td className="border-[1px] border-[#ddd] p-2  text-center">
              <i class="fa-solid fa-eye"></i>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TableData;
