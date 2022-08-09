import TableData from "../components/TableData/TableData";

const Home = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center px-4">
      <div className="flex flex-col justify-between items-center py-4 w-full mt-6">
        <h1 className="text-4xl font-bold text-grey mb-8">
          Teravin test React.js
        </h1>
        <button
          type="button"
          className="bg-grey text-slate-100 px-5 py-3 rounded-md cursor-pointer font-bold w-full"
        >
          Add +
        </button>
      </div>
      <TableData />
    </div>
  );
};

export default Home;
