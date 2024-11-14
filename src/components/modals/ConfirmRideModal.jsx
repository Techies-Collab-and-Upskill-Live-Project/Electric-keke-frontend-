import dispatchables from "@/utils/dispatchables";
import CustomModal from "@/components/CustomModal";
import Heading from "../Heading";
import Choose from "../Choose";
import CheckBox from "../forms/CheckBox";
import { useState } from "react";
import { useNotification } from "@/hooks/useNotification";
import { useGlobalAuthContext } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { deletItemFromLs } from "@/utils/ls";
import RadioBox from "../forms/RadioBox";

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
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const { user } = useGlobalAuthContext();
  const [transactData, setTransactData] = useState({
    exact: false,
    refcode: false,
    pay: "",
  });

  useNotification((notification) => {
    // console.log(notification, 'time to open buttons');
    setDisabled(false);
  });

  const { showAlert } = dispatchables();

  const handleChange = (e) => {
    const { name: key, checked, value, id } = e.target;
    setTransactData((prev) => ({
      ...prev,
      [key]: key === "pay" ? id : checked,
    }));
  };

  const handleClick1 = () => {
    showAlert("payment declined");
  };

  const handleClick2 = (e) => {
    showAlert("payment confirmed");
    deletItemFromLs("book-data");
    deletItemFromLs("bookData");
    navigate(`/driver/${user?.id}`);
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
          name="exact"
          handleChange={handleChange}
          label={
            <>
              I received the exact amount of money: <b>{price} NGN</b>
            </>
          }
          labelStyle="modal__confirm__checkbox-label"
        />

        <CheckBox
          styling="modal__confirm__checkbox-input"
          handleChange={handleChange}
          name="refcode"
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
            <RadioBox
              name="pay"
              label="Correct"
              handleChange={handleChange}
              labelStyle=""
              id="correct"
            />
            
            <RadioBox
              name="pay"
              label="InCorrect"
              handleChange={handleChange}
              labelStyle=""
              id="incorrect"
            />
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
          disabled1={disabled}
          disabled2={disabled}
        />
      </form>
    </CustomModal>
  );
};

export default ConfirmRideModal;
