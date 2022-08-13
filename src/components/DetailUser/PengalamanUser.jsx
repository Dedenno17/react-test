const PengalamanUser = (props) => {
  return (
    <div className="w-full mt-5">
      <h2 className="text-lg font-bold text-slate-100 mb-2">
        Pengalaman Kerja
      </h2>
      <div className="w-full">
        <div className="w-full">
          <p className="font-ligth text-slate-400 text-sm">
            bulan masuk - bulan keluar
          </p>
        </div>
        <div className="w-full mt-2">
          <h2 className="font-bold text-slate-100 text-md">Posisi</h2>
          <p className="font-ligth text-slate-100 text-sm">Jabatan</p>
          <p className="font-ligth text-slate-100 text-sm">Gaji</p>
        </div>
      </div>
    </div>
  );
};

export default PengalamanUser;
