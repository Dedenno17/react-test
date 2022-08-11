const pages = [1, 2, 3, 4];

const ProgressBar = () => {
  return (
    <div className="w-[90%] bg-slate-100 h-1 mx-auto relative lg:w-[75%]">
      <span className="block w-full h-full bg-tosca"></span>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
        {pages.map((item, i) => (
          <span
            className="py-[2px] px-[10px] bg-grey text-slate-100 border-[1px] border-slate-100 rounded-full shadow-grey"
            key={i}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
