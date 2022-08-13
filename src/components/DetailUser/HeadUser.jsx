const HeadUser = (props) => {
  return (
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
  );
};

export default HeadUser;
