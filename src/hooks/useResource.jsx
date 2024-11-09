import { addItemToLs, getItemFromLs } from "@/utils/ls";
import { useEffect, useState } from "react";

export const useResource = (callback, key, resourceEmpty = []) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, seterror] = useState(null);
  const [resource, setResource] = useState(getItemFromLs(key) || null);

  useEffect(() => {
    if (resource && key) {
      setIsLoading(false);
      return;
    } else {
      (async () => {
        setIsLoading(true);
        try {
          const data = await callback();
          // for when resource is null or undefined
          if (data === undefined) return setResource(resourceEmpty);
          setResource(data);
          // console.log(data);
          if (key) addItemToLs(key, data);
        } catch (error) {
          seterror(error);
          setResource(resourceEmpty);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [callback]);

  return { isLoading, resource, error, setResource };
};
