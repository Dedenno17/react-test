const DetailUSer = () => {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center">
        <div className="w-[30%] overflow-hidden rounded-md">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="profile"
            className="w-full"
          />
        </div>
        <div className="w-[65%]">
          <h1 className="text-xl font-bold text-slate-100">Nama</h1>
          <p className="font-ligth text-slate-400 text-sm">Sekolah</p>
          <p className="font-ligth text-slate-400 text-sm">email</p>
        </div>
      </div>
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
      <div className="w-full mt-5">
        <h2 className="text-lg font-bold text-slate-100 mb-2">Keahlian</h2>
        <span className="font-ligth text-slate-100 text-sm">skill</span>
      </div>
    </div>
  );
};

export default DetailUSer;
