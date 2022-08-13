const PendidikanUser = (props) => {
  return (
    <div className="w-full mt-5">
      <h2 className="text-lg font-bold text-slate-100 mb-2">
        Riwayat Pendidikan
      </h2>
      <div className="w-full">
        <div className="w-full">
          <p className="font-ligth text-slate-400 text-sm">tahun lulus</p>
        </div>
        <div className="w-full mt-2">
          <h2 className="font-bold text-slate-100 text-md">institusi</h2>
          <p className="font-ligth text-slate-100 text-sm">S1 | Jurusan</p>
          <p className="font-ligth text-slate-100 text-sm">nilai</p>
        </div>
      </div>
    </div>
  );
};

export default PendidikanUser;
