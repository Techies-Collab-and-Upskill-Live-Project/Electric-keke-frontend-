import { useEffect, useState } from "react";

const one_sec = 1000;
const one_min = 60 * one_sec;
const five_mins = 5 * one_min;

export const useCountDownTime = (time = five_mins) => {
  const [timeLeft, setTimeLeft] = useState(time);

  useEffect(() => {
    const addedMinsFromCurrentTime = new Date().getTime() + time;

    const calculateTimeLeft = (callback) => {
      const currentTime = new Date().getTime();
      const expiryTime = addedMinsFromCurrentTime - currentTime;
      if (expiryTime < 0) {
        callback();
      }
      setTimeLeft(expiryTime);
    };

    const interval = setInterval(() => {
      calculateTimeLeft(() => clearInterval(interval));
    }, one_sec);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / one_min);
  const seconds = Math.floor((timeLeft % one_min) / one_sec);

  return { minutes, seconds };
};
