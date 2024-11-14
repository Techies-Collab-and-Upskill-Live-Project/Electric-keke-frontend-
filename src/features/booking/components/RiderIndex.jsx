import Rider from "./Rider";
import { motion } from "framer-motion";
import useTitle from "../../../hooks/useTitle";
import RegularList from "@/components/_design-patterns/RegularList";
import { GetAvailableRiders } from "../services/GetAvailableRiders";
import { useResource } from "@/hooks/useResource";
import Loader from "@/components/loaders/Loader";

const RiderIndex = ({ setRiderTitle }) => {
  useTitle("Riders");
  const { isLoading, resource: availableRiders } = useResource(
    GetAvailableRiders,
    "list-of-riders"
  );

  return isLoading ? (
    <Loader className="mx-auto size-32" type="spin2" />
  ) : (
    <motion.div
      key="riders-list"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{
        x: -200,
        opacity: 0,
        transition: { duration: 1, ease: "easeInOut" },
      }}
      transition={{ duration: 0.65 }}
      className="available-riders__wrapper"
    >
      {availableRiders.length < 1 ? (
        <motion.div
          key="no-riders"
          initial={{ x: 200, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={true && { x: -200, opacity: 0 }}
          transition={{ duration: 0.65, type: "just" }}
          className="col-span-3 avaible-riders__wrapper"
        >
          <h2>No availble riders at the moment</h2>
        </motion.div>
      ) : (
        <RegularList
          component={Rider}
          list={availableRiders}
          keyExtractor={availableRiders.map((item) => item.fullname)}
          setRiderTitle={setRiderTitle}
        />
      )}
    </motion.div>
  );
};

export default RiderIndex;
