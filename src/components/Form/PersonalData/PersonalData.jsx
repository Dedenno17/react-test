import PersonalDataForm from "./PersonalDataForm";

const PersonalData = () => {
  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Personal Data
      </h2>
      <PersonalDataForm />
    </div>
  );
};

export default PersonalData;
