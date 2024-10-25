import Btn from "@/components/btn/Btn";
import Choose from "@/components/Choose";
import dispatchables from "@/utils/dispatchables";

const PayModalBottom = ({ methodOfPayment }) => {
  const { showAlert } = dispatchables();
  return (
    <>
      {methodOfPayment === "card" && (
        <Choose
          containerClass="grid grid-cols-2 gap-x-2 border"
          choice1txt="Confirm"
          choice2txt="Cancel"
          btnClass="btn btn--lg rounded-full"
          addedClass1="btn--primary"
          addedClass2="btn--secondary"
          handleChoice1={() => {
            showAlert("card Details Saved", "info");
          }}
          handleChoice2={() => {
            showAlert("cancel card", "info");
          }}
        />
      )}
      {methodOfPayment === "bank" && (
        <Btn
          text="Confirm"
          styling="btn btn--lg btn--primary w-full rounded-full"
          onClick={() => {
            showAlert("bank details successfully added", "info");
          }}
        />
      )}
    </>
  );
};

export default PayModalBottom;
