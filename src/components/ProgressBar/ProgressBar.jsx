const ProgressBar = () => {
  return (
    <div className="w-[90%] bg-slate-100 h-1 mx-auto relative lg:w-[75%]">
      <span className="block w-full h-full bg-tosca"></span>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
        <span className="py-[2px] px-[10px] bg-grey text-slate-100 border-[1px] border-slate-100 rounded-full">
          1
        </span>
        <span className="py-[2px] px-[10px] bg-grey text-slate-100 border-[1px] border-slate-100 rounded-full">
          2
        </span>
        <span className="py-[2px] px-[10px] bg-grey text-slate-100 border-[1px] border-slate-100 rounded-full">
          3
        </span>
        <span className="py-[2px] px-[10px] bg-grey text-slate-100 border-[1px] border-slate-100 rounded-full">
          4
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
