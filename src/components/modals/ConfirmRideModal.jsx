import dispatchables from "@/utils/dispatchables";
import CustomModal from "@/components/CustomModal";
import Heading from "../Heading";
import Choose from "../Choose";
import CheckBox from "../forms/CheckBox";

const ConfirmRideModal = ({
  isModalOpen,
  openModal,
  closeModal,
  fullname = "Susan Michael",
  price = 3000,
}) => {
  console.log(
    "come and refactor the radio box with the radio box input component"
  );

  const { showAlert } = dispatchables();

  const handleClick1 = () => {
    showAlert("payment declined");
  };

  const handleClick2 = (e) => {
    showAlert("payment confirmed");
  };

  return (
    <CustomModal
      openModal={openModal}
      closeModal={closeModal}
      isModalOpen={isModalOpen}
      modalStyling="modal__confirm"
      modalContainerStyling="flex-center"
    >
      <Heading
        className="text-center"
        title="Confirm Payment"
        tclass="font-josefin font-bold text-2xl md:text-[2rem]"
      />

      <form
        className="space-y-2 md:space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <CheckBox
          styling="modal__confirm__checkbox-input"
          label={
            <>
              I received the exact amount of money: <b>{price} NGN</b>
            </>
          }
          labelStyle="modal__confirm__checkbox-label"
        />

        <CheckBox
          styling="modal__confirm__checkbox-input"
          label={
            <>
              transaction memo contains this payment ref: <b>ZX3489</b>
            </>
          }
          labelStyle="modal__confirm__checkbox-label"
        />

        <div>
          <p className="modal__confirm__checkbox-label">
            The Payment was made my {fullname}?
          </p>

          <div className="flex items-center mt-2 md:mt-4 lg:mt-6 gap-x-5">
            <label htmlFor="correct" className="modal__confirm__checkbox-label">
              <input type="radio" name="pay" id="correct" className="mr-1" />
              Correct
            </label>

            <label htmlFor="incorrect" className="modal__confirm__checkbox-label">
              <input type="radio" name="pay" id="incorrect" className="mr-1" />
              Incorrect
            </label>

            {/* <label htmlFor="unsure">
              <input type="radio" name="pay" id="unsure" className="mr-1" />
              I'm not sure
            </label> */}
          </div>
        </div>

        <Choose
          containerClass="flex items-center gap-x-6"
          choice1txt="Cancel"
          choice2txt="Confirm"
          btnClass="btn btn--lg w-1/2 "
          addedClass1="bg-neutral-100 text-black"
          addedClass2="btn--primary"
          handleChoice1={handleClick1}
          handleChoice2={handleClick2}
        />
      </form>
    </CustomModal>
  );
};

export default ConfirmRideModal;
