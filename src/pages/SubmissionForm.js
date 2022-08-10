import Forms from "../components/Form/Forms";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const SubmissionForm = () => {
  return (
    <div className="w-full min-h-[100vh] px-4 py-12">
      <div className="p-8 bg-grey rounded-md">
        <h1 className="text-center text-4xl font-bold text-slate-100 mb-10">
          Submission Form
        </h1>
        <ProgressBar />
        <Forms />
      </div>
    </div>
  );
};

export default SubmissionForm;
