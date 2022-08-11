import Button from "../../UI/Button";
import KeahlianList from "./KeahlianList";

const DUMMY__DATA = ["Javscript", "HTML", "CSS"];

const Keahlian = () => {
  return (
    <div>
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Keahlian
      </h2>
      <form className="w-full lg:flex lg:justify-between lg:items-center">
        <input
          type="text"
          placeholder="Input skill"
          className="w-full px-3 py-3 rounded-md outline-none border-none mb-3 lg:w-[65%] lg:mb-0"
        />
        <div className="w-full lg:w-[30%]">
          <Button
            className="bg-blue w-full text-slate-100 hover:brightness-95"
            type="submit"
          >
            + Add another skill
          </Button>
        </div>
      </form>
      <KeahlianList data={DUMMY__DATA} />
      <div className="mt-8 lg:flex lg:justify-end lg:items-center">
        <Button
          className="bg-tosca w-full text-slate-100 lg:w-[20%]"
          typw="button"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Keahlian;
