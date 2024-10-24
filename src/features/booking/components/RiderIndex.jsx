import Rider from "./Rider";
import { AnimatePresence, motion } from "framer-motion";
import useTitle from "../../../hooks/useTitle";
import riders from "@/mock-data/riders";
import RegularList from "@/components/_design-patterns/RegularList";
import { GetAvailableRiders } from "../services/GetAvailableRiders";
import { useResource } from "@/hooks/useResource";
import { useArray } from "@/hooks/useArray";
import { useEffect, useState } from "react";
import Loader from "@/components/loaders/Loader";

const RiderIndex = () => {
  useTitle("Riders");
  const { isLoading, resource: availableRiders } = useResource(
    GetAvailableRiders,
    "riders"
  );
  const [navigationLink, setNavigationLink] = useState("");

  // for development purpose
  const { unstableArray: arrayOfMockRiders, substituteItemsProps } =
    useArray(riders);

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
    <Loader className="size-32 mx-auto" type="spin2" />
  ) : (
    <>
      {availableRiders.length < 1 ? (
        <motion.div
          key="no-riders"
          initial={{ x: 200, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={true && { x: -200, opacity: 0 }}
          transition={{ duration: 0.65, type: "just" }}
          className="avaible-riders__wrapper col-span-3"
        >
          <h2>No availble riders at the moment</h2>
        </motion.div>
      ) : (
        <motion.div
          key="riders"
          initial={{ x: 200, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={true && { x: -200, opacity: 0, transition: { duration: 3 } }}
          transition={{ duration: 0.65, type: "just" }}
          className="available-riders__wrapper"
        >
          <RegularList
            component={Rider}
            list={arrayOfMockRiders}
            keyExtractor={arrayOfMockRiders.map((item) => item.fullname)}
          />
        </motion.div>
      )}
    </>
  );
};

export default RiderIndex;
