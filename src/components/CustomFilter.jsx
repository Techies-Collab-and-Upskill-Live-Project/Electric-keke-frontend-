import { useState } from "react";
import {
  FilterGroup,
  FilterGroupItem,
  FilterSheet,
  FilterTrigger,
} from "./_custom-ui/Filter";
import Btn from "./btn/Btn";
import { FilterIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const CustomFilter = ({ children, icon = <FilterIcon />, text }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <FilterSheet>
      <FilterTrigger onClick={() => setShowFilter(!showFilter)}>
        <Btn
          text={text && text}
          icon={icon}
          styling="gap-2 bg-transparent text-black border-[0.5px] rounded-s"
        />
      </FilterTrigger>

      <AnimatePresence>
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute right-0 bg-white z-10 min-w-[185px] shadow-2xl rounded-[6px] p-1"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </FilterSheet>
  );
};

export default CustomFilter;
