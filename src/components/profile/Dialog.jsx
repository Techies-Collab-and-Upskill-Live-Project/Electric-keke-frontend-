import React from "react";
import Choose from "../shared/Choose";
import { DeleteAccount, Logout } from "../../lib/requests/auth";
import dispatchables from "../../utils/dispatchables";
import { useNavigate } from "react-router-dom";

const Dialog = ({ title }) => {
  const { showAlert, flipModal } = dispatchables();
  const navigate = useNavigate();

  const handleChoice1 = () => {
    // for ndiscontinuing delete
    flipModal(false);
  };

  const handleChoice2 = async () => {
    // continue with deleting account or logging out account
    const logout = title === "Logout of your account" ? true : false;
    try {
      if (logout) {
        // continue to logout
        await Logout(showAlert);
        flipModal(false);
        return;
      }

      if (!logout) {
        // continue deltion of account
        await DeleteAccount();
        showAlert("Deleted Account Succesfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dialog-modal">
      <div>
        <div className="text-center">
          <h2 className="font-josefin font-bold">{title}?</h2>
          <p className="text-eiteen">
            Are you sure you want to{" "}
            {title === "Logout of your account"
              ? "logout"
              : "delete your account"}
            ?
          </p>
        </div>

        <Choose
          choice1txt={title === "Logout of your account" && "No"}
          choice2txt={title === "Logout of your account" && "Yes"}
          btnClass="h-14 rounded-[56px] w-[252px]"
          addedClass1="btn-clear text-black"
          addedClass2="btn-danger"
          containerClass="flex-center gap-x-6"
          handleChoice1={handleChoice1}
          handleChoice2={handleChoice2}
        />
      </div>
    </div>
  );
};

export default Dialog;