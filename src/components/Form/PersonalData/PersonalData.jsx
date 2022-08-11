import Button from "../../UI/Button";
import PersonalDataForm from "./PersonalDataForm";

const PersonalData = () => {
  return (
    <div className="w-full">
      <h2 className="text-left text-2xl font-medium text-slate-100 mb-5">
        Personal Data
      </h2>
      <form className="w-full">
        <PersonalDataForm />
        <div className="w-full mt-8">
          <Button className="w-full bg-tosca text-grey" type="submit">
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalData;
