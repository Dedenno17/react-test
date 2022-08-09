import TableData from "../components/TableData/TableData";

const Home = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <div className="flex justify-between items-center py-5 w-[790px] mt-6">
        <h1 className="text-4xl font-bold text-grey">Teravin test React.js</h1>
        <button
          type="button"
          className="bg-grey text-slate-100 px-5 py-2 rounded-md cursor-pointer font-bold"
        >
          Add +
        </button>
      </div>
      <TableData />
    </div>
  );
};

export default Home;
