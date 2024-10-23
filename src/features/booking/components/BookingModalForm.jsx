import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dispatchables from "@/utils/dispatchables";
import { getItemFromLs } from "@/utils/ls";
import { UnlockScroll } from "@/utils/ScrollLock";
import Btn from "@/components/btn/Btn";
import { useAreInputsFilled } from "@/features/onboarding/hooks/useAreInputsFilled";

const getPrice = async (action, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(action());
    }, time);
  });
};

const ModalFormInput = ({
  placeholder,
  name,
  value,
  handleChange,
  showTarget,
}) => {
  return (
    <div className="modal__map-input-field">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        className="text-eiteen w-10/12 outline-none border-none"
      />
      {showTarget && (
        <div>
          <img src="/target.svg" alt="target" />
        </div>
      )}
    </div>
  );
};

const BookingModalForm = ({ closeModal }) => {
  const { showAlert, inputDataForBookingRequest, inputBookingData } =
    dispatchables();

  const { origin, destination, price } = useSelector((state) => state.bookData);

  const navigate = useNavigate();
  const [showPrice, setShowPrice] = useState(false);

  const disabled = useAreInputsFilled(origin && destination);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!showPrice) {
      showAlert("Getting price estimate");
      await getPrice(() => {
        let price = `${Math.floor(Math.random() * 3000)}`;
        inputDataForBookingRequest("price", price);
        setShowPrice(true);
      }, 5000);
      return;
    }

    try {
      const user = getItemFromLs("user");
      if (!user) {
        throw new Error("Open an accont");
      }
      await closeModal();
      navigate("/riders");
    } catch (error) {
      showAlert("Login to book a ride");
    }
  };
  console.log("Come to booking modal form and fix the locka and unlockScroll");

  return (
    <form className="ride-request__form" onSubmit={handleSubmit}>
      <ModalFormInput
        placeholder="Input Pick up address"
        name="origin"
        value={origin}
        handleChange={inputBookingData}
        showTarget
      />
      <ModalFormInput
        placeholder="Drop off location"
        name="destination"
        value={destination}
        handleChange={inputBookingData}
      />

      {showPrice && (
        <div className="estimate-price">
          <p>NGN{price}</p>
        </div>
      )}

      <Btn
        text={showPrice ? "Proceed" : "Confirm"}
        styling="btn btn--primary btn--lg"
        disabled={disabled}
      />
    </form>
  );
};

export default BookingModalForm;
