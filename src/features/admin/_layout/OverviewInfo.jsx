import { overview_titles, overview_descriptions } from "../constants";
import Btn from "../../../components/btn/Btn";
import Heading from "@/components/Heading";

const OverviewInfo = ({ page, children }) => {
  return (
    <div className="overview-info">
      <Heading
        title={overview_titles[page]}
        description={overview_descriptions[page]}
        tclass="overview-title"
        dclass="text-base"
      />

      <div className="flex items-center gap-x-3">
        <Btn
          text="Export"
          className="bg-transparent text-black border-[0.5px]"
        />

        {children}
      </div>
    </div>
  );
};

export default OverviewInfo;
