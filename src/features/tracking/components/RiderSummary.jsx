import Btn from "@/components/btn/Btn";

const RiderSummary = ({ openModal, price }) => {
  return (
    <>
      <div className="flex items-center gap-x-5">
        <p className="text-base font-semibold">Total cost of ride</p>
        <div className="ride-fare !font-normal">&#8358; {price}</div>
      </div>

      <Btn
        text="Confirm Payment"
        styling="btn btn--lg btn--primary mt-10"
        onClick={openModal}
      />
    </>
  );
};

export default RiderSummary;
