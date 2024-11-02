import { useState, useEffect } from "react";

export const useTestmony = (testimonies) => {
  const [currentTestimony, setCurrentTestimony] = useState(0);

  useEffect(() => {
    const lastTestimony = testimonies.length - 1;
    if (currentTestimony > lastTestimony) {
      setCurrentTestimony(0);
    }
    if (currentTestimony < 0) {
      setCurrentTestimony(lastTestimony);
    }
  }, [currentTestimony]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimony((prev) => prev + 1);
    }, 8000);
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const nextTestimony = (type) => {
    type === "increment"
      ? setCurrentTestimony((prev) => prev + 1)
      : setCurrentTestimony((prev) => prev - 1);
  };

  return {
    nextTestimony,
    currentTestimony,
  };
};
