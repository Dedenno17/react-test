const PengalamanUser = (props) => {
  return (
    <div className="w-full mt-5">
      <h2 className="text-lg font-bold text-slate-100">Pengalaman Kerja</h2>
      {props.dataUser.map((item) => (
        <div className="w-full mt-3" key={item.id}>
          <div className="w-full">
            <p className="font-ligth text-slate-400 text-sm">
              {item.masuk.bulanMasuk} {item.masuk.tahunMasuk} -{" "}
              {item.keluar.bulanKeluar} {item.keluar.tahunKeluar}
            </p>
          </div>
          <div className="w-full mt-2">
            <h2 className="font-bold text-slate-100 text-md">{item.posisi}</h2>
            <p className="font-ligth text-slate-100 text-sm">{item.jabatan}</p>
            <p className="font-ligth text-slate-100 text-sm">{item.gaji}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PengalamanUser;
