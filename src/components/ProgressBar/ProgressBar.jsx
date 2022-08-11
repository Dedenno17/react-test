import { useSelector } from "react-redux";

const pages = [1, 2, 3, 4];

const ProgressBar = () => {
  const formPages = useSelector((state) => state.formToShow.form);

  return (
    <div className="w-[90%] bg-slate-100 h-1 mx-auto relative  lg:w-[75%]">
      <span className="block h-full overflow-hidden">
        <span
          className={`block h-full bg-tosca w-full -translate-x-[-100%] ${
            formPages.visited === 1
              ? "animate-slide-3"
              : formPages.visited === 2
              ? "animate-slide-2"
              : formPages.visited === 3
              ? "animate-slide-1"
              : ""
          }`}
        ></span>
      </span>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
        {pages.map((item, i) => (
          <span
            className={`py-[2px] px-[10px] ${
              item <= formPages.visited
                ? "bg-tosca text-grey animate-pop-up"
                : "bg-grey text-slate-100"
            } border-[1px] border-slate-100 rounded-full shadow-grey`}
            key={i}
          >
            {item <= formPages.visited ? (
              <i className="fa-solid fa-check text-sm scale-0 animate-pop-up"></i>
            ) : (
              item
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
