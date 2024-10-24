import { addItemToLs, getItemFromLs } from "@/utils/ls";
import { useEffect, useState } from "react";

export const useResource = (callback, key) => {
  const [isLoading, setIsLoading] = useState(true);
  const [resource, setResource] = useState(getItemFromLs(key) || null);

  useEffect(() => {
    if (resource) {
      return;
    } else {
      (async () => {
        setIsLoading(true);
        try {
          const data = await callback();
          setResource(data);
          addItemToLs(key, data);
          setIsLoading(false);
        } catch (error) {
          const { status } = error.data;
          console.log(status);
        }
      })();
    }
  }, []);

  return { isLoading, resource };
};
