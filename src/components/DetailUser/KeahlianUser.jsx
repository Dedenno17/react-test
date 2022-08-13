const KeahlianUser = (props) => {
  const keahlian = props.dataUser.keahlian.join(" ");

  return (
    <div className="w-full mt-5">
      <h2 className="text-lg font-bold text-slate-100 mb-2">Keahlian</h2>
      <span className="font-ligth text-slate-100 text-sm">{keahlian}</span>
    </div>
  );
};

export default KeahlianUser;
