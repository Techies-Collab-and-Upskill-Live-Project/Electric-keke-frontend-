import { useEffect, useState } from "react";

const five_mins = 5 * 60;

export const useCountDownTime = (time = five_mins) => {
  const [duration, setDuration] = useState(time);

  useEffect(() => {
    let intervalId;

    const countDown = () => {
      setDuration((prev) => prev - 1);
    };

    if (!intervalId && duration) {
      intervalId = setInterval(countDown, 1000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [duration]);

  const minutes = String(Math.floor(duration / 60)).padStart(2, "0");
  const seconds = String(Math.floor(duration % 60)).padStart(2, "0");

  const restartCountdown = () => {
    if (duration) return;
    setDuration(time);
  };

  return { minutes, seconds, restartCountdown };
};
