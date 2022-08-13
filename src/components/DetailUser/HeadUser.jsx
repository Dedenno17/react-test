const HeadUser = (props) => {
  return (
    <div className="w-full flex justify-between items-start">
      <div className="w-[30%] overflow-hidden rounded-md md:w-[20%]">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="profile"
          className="w-full"
        />
      </div>
      <div className="w-[65%] md:w-[75%]">
        <h1 className="text-xl font-bold text-slate-100 md:text-4xl">
          {props.dataUser.namaDepan} {props.dataUser.namaBelakang}
        </h1>
        <p className="font-ligth text-slate-400 text-sm md:text-lg">
          {props.dataUser.email}
        </p>
      </div>
    </div>
  );
};

export default HeadUser;
