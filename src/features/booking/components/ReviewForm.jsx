import { deletItemFromLs } from "../../../utils/ls";
import dispatchables from "../../../utils/dispatchables";
import { useRef } from "react";
import Btn from "@/components/btn/Btn";
import { useNavigate } from "react-router-dom";

const ReviewForm = ({ rateValue, setRateDriver, closeModal }) => {
  const navigate = useNavigate();
  const commentRef = useRef();
  const { showAlert } = dispatchables();

  const handleSubmit = async (e) => {
    showAlert('commented successfully');
    deletItemFromLs("book-data");
    deletItemFromLs("rider");
    setRateDriver(false);
    await closeModal();
    navigate("/");
  };

  return (
    <form className="w-full px-5 mt-4 md:mt-8" onSubmit={(e) => preventDefault}>
      <label className="w-full">
        <span className="block text-base font-semibold">Comment</span>
        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="3"
          className="w-full px-3 py-2 border resize-none border-neutral-300 rounded-m"
          ref={commentRef}
        />
      </label>

      <Btn
        text="Send"
        styling="btn btn--primary btn--lg w-full mt-3"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default ReviewForm;
