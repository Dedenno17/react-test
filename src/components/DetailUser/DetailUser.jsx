import HeadUser from "./HeadUser";
import KeahlianUser from "./KeahlianUser";
import PendidikanUser from "./PendidikanUser";
import PengalamanUser from "./PengalamanUser";

const DetailUSer = () => {
  return (
    <div className="w-full">
      <HeadUser />
      <PengalamanUser />
      <PendidikanUser />
      <KeahlianUser />
    </div>
  );
};

export default DetailUSer;
