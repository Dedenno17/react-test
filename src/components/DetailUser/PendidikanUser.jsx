const PendidikanUser = (props) => {
  return (
    <div className="w-full mt-5">
      <h2 className="text-lg font-bold text-slate-100">Riwayat Pendidikan</h2>
      {props.dataUser.riwayatPendidikan.map((item) => (
        <div className="w-full mt-3" key={item.id}>
          <div className="w-full">
            <p className="font-ligth text-slate-400 text-sm">
              {item.tahunLulus}
            </p>
          </div>
          <div className="w-full mt-2">
            <h2 className="font-bold text-slate-100 text-md">
              {item.institusi}
            </h2>
            <p className="font-ligth text-slate-100 text-sm">
              {item.jenjangPendidikan} | {item.jurusan}
            </p>
            <p className="font-ligth text-slate-100 text-sm">
              {item.nilaiAkhir}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PendidikanUser;
