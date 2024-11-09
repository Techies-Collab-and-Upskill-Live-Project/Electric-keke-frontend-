import { useEffect, useState } from "react";
import Heading from "@/components/Heading";
import Rate from "./Rate";
import { useRating } from "../hooks/useRating";
import { ProfilePhoto } from "@/features/profile";
import ReviewForm from "./ReviewForm";
import TransactionRatingStar from "./TransactionRatingStar";
import { useResource } from "@/hooks/useResource";

const RateRiderModal = ({ setRateDriver, closeModal }) => {
  const { rate, comment, rateTheDriver } = useRating();
  const { resource: bookData } = useResource(
    () => console.log("bookData"),
    "bookData"
  );

  return (
    <>
      {!comment && (
        <ProfilePhoto
          imageUrl={bookData?.avatarUrl}
          sharedStyle="rounded-full size-20 md:size-[103px] mx-auto"
          styling="rounded-full size-full"
          noImageContainerStyle="flex-center border"
          text={bookData?.rider_name[0]}
        />
      )}

      <div className="w-full px-5 md:mt-6">
        {comment && <TransactionRatingStar comment={comment} rate={rate} />}

        <Heading
          className="w-full mt-3 text-center md:mt-6 text-nowrap"
          title={comment ? "Great!" : "Rate Your Experience"}
          tclass="text-2xl md:text-[40px] font-bold m-0"
          description={comment && "Tell us a bit more about your ride"}
          dclass="text-base md:text-[28px] mt-2 text-neutral-500"
        />

        {!comment && (
          <TransactionRatingStar
            comment={comment}
            handClick={rateTheDriver}
            rate={rate}
          />
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
