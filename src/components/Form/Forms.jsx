import { useSelector } from "react-redux";

import PengalamanKerja from "./PengalamanKerja/PengalamanKerja";
import PersonalData from "./PersonalData/PersonalData";
import RiwayatPendidikan from "./RiwayatPendidikan/RiwayatPendidikan";
import Keahlian from "./Keahlian/Keahlian";

const Forms = () => {
  const formPage = useSelector((state) => state.formToShow.form.page);

  let content =
    formPage === 1 ? (
      <PersonalData />
    ) : formPage === 2 ? (
      <RiwayatPendidikan />
    ) : formPage === 3 ? (
      <PengalamanKerja />
    ) : (
      <Keahlian />
    );

  return <div className="w-full mt-14">{content}</div>;
};

export default Forms;
