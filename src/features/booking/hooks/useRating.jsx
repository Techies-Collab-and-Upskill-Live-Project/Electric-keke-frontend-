import { useState } from "react";

export const useRating = () => {
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState(false);

  const rateTheDriver = (item) => {
    setRate(item);
    setComment(true);
  };

  return {
    rate,
    comment,
    rateTheDriver,
  };
};
