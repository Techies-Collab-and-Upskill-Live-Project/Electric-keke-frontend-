import { useEffect, useState } from "react";
import Heading from "@/components/Heading";
import Rate from "./Rate";
import { useRating } from "../hooks/useRating";
import { ProfilePhoto } from "@/features/profile";
import ReviewForm from "./ReviewForm";
import TransactionRatingStar from "./TransactionRatingStar";

const starSize = (mediaSize) => {
  return mediaSize > 0 && mediaSize < 768
    ? 20
    : mediaSize > 769 && mediaSize < 1024
    ? 25
    : 50;
};

const RateRiderModal = ({ setRateDriver, closeModal }) => {
  const { rate, comment, rateTheDriver } = useRating();
  // const [mediaSize, setMediaSize] = useState(window.outerWidth);

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setMediaSize(e.currentTarget.outerWidth);
    });

    return window.removeEventListener("resize", (e) =>
      setMediaSize(e.currentTarget.outerWidth)
    );
  }, []);

  return (
    <>
      {!comment && (
        <div className="mx-auto size-20 md:size-[103px]">
          <ProfilePhoto styling="rounded-full size-full" />
        </div>
      )}

      <div className="w-full mt-6 px-5">
        {comment && <TransactionRatingStar comment={comment} rate={rate} />}

        <Heading
          className="text-nowrap mt-6 text-center w-full text-center"
          title={comment ? "Great!" : "Rate Your Experience"}
          tclass="text-2xl md:text-[40px] font-bold m-0"
          description={comment && "Tell us a bit more about your ride"}
          dclass="text-base md:text-[28px] mt-2 text-neutral-500"
        />

        {!comment && (
          <TransactionRatingStar comment={comment} handClick={rateTheDriver} rate={rate} />
        )}
      </div>

      {comment && (
        <ReviewForm
          rateValue={rate}
          setRateDriver={setRateDriver}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default RateRiderModal;
