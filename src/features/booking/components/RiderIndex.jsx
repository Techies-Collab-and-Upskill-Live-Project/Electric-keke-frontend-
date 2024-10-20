import Rider from "./Rider";
import { AnimatePresence, motion } from "framer-motion";
import useTitle from "../../../hooks/useTitle";
import riders from "@/mock-data/riders";
import RegularList from "@/components/_design-patterns/RegularList";
import { GetAvailableRiders } from "../services/GetAvailableRiders";
import { useResource } from "@/hooks/useResource";
import { useArray } from "@/hooks/useArray";
import { useEffect } from "react";

const RiderIndex = () => {
  useTitle("Riders");
  const { isLoading, resource: availableRiders } = useResource(
    GetAvailableRiders,
    "riders"
  );

  // for development purpose
  const { array: arrayOfMockRiders, substituteItemsProps } = useArray(riders);

  useEffect(() => {
    if (!isLoading) {
      substituteItemsProps({
        address: "beta street",
        email: "Joseyjayy1@gmail.com",
        id: "fa9352ab-8dd4-4094-8b0c-397254ace7eb",
        phone: "838383",
        state_of_residence: "imo",
      });
    }
  }, [isLoading]);
  // the above is for development purpose

  return isLoading ? (
    <div>Loadding ...</div>
  ) : (
    <AnimatePresence>
      <motion.div
        initial={{ x: 200, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.65, type: "just" }}
        className="grid grid-cols-2 md:grid-cols-3 gap-x-2 md:gap-x-6 gap-y-2 mt-7 relative rider-index"
      >
        {availableRiders.length < 1 ? (
          <div className="border col-span-3">
            <h2>No availble riders at the moment</h2>
          </div>
        ) : (
          <RegularList component={Rider} list={arrayOfMockRiders} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default RiderIndex;
