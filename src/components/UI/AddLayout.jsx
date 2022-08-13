const AddLayout = (props) => {
  return (
    <div className="w-full h-80 flex border-[1px] border-slate-100 rounded-md lg:w-[46.5%] lg:h-96 mx-auto">
      <div
        className="m-auto text-center cursor-pointer"
        onClick={props.onClick}
      >
        <p className="text-slate-100 font-bold text-6xl">+</p>
        <p className="text-sm font-light text-slate-100">
          Add riwayat pendidikan
        </p>
      </div>
    </div>
  );
};

export default AddLayout;
