import {
  overview_titles,
  overview_descriptions,
  filter_groups,
  translate_filter_option,
} from "../constants";
import Btn from "../../../components/btn/Btn";
import CustomFilter from "../../../components/CustomFilter";
import Heading from "@/components/Heading";
import { useGlobalAdminContext } from "../context/AdminContext";

const OverviewInfo = () => {
  const { currentAdminPage, changeContentToDisplay } = useGlobalAdminContext();

  return (
    <div className="overview-info">
      <Heading
        title={overview_titles[currentAdminPage]}
        description={overview_descriptions[currentAdminPage]}
        tclass="overview-title"
        dclass="text-base"
      />

      <div className="flex items-center gap-x-3">
        <Btn
          text="Export"
          className="bg-transparent text-black border-[0.5px]"
        />

        {currentAdminPage === "Overview" ? null : (
          <CustomFilter
            filterGroups={filter_groups[currentAdminPage]}
            handleClick={(option) => {
              changeContentToDisplay(translate_filter_option[option]);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default OverviewInfo;
