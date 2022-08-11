const KeahlianList = (props) => {
  return (
    <div className="w-full py-3">
      <ul className="w-full">
        {props.data.map((item, i) => (
          <li key={i} className="w-full py-2 justify-between flex">
            <p className=" text-slate-100 font-semibold mr-2">{item}</p>
            <span className="text-slate-100">x</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default KeahlianList;
