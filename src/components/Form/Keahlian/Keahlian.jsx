import Button from "../../UI/Button";
import KeahlianList from "./KeahlianList";

const DUMMY__DATA = ["Javscript", "HTML", "CSS"];

const Keahlian = () => {
  return (
    <div>
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Keahlian
      </h2>
      <form>
        <input
          type="text"
          placeholder="Input skill"
          className="w-full px-3 py-3 rounded-md outline-none border-none mb-3"
        />
        <div>
          <Button className="bg-blue w-full text-slate-100" type="submit">
            + Add another skill
          </Button>
        </div>
      </form>
      <KeahlianList data={DUMMY__DATA} />
      <div className="mt-8">
        <Button className="bg-tosca w-full text-slate-100" typw="button">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Keahlian;
