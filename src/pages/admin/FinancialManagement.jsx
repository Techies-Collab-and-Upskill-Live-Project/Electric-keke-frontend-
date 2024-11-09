import { FilterGroup } from "@/components/_custom-ui/Filter";
import CustomFilter from "@/components/CustomFilter";
import { DisplayTable } from "@/features/admin";
import OverviewInfo from "@/features/admin/_layout/OverviewInfo";
import Analytics from "@/features/admin/components/Analytics";
import { finance_management_tablehead } from "@/features/admin/constants";
import { queryFinancesDB } from "@/features/admin/services/queryFinancesDB";
import { useResource } from "@/hooks/useResource";
import { useRef } from "react";

const FinancialManagement = () => {
  const tableHeadRefs = useRef([]);

  const {
    resource: earnings,
    isLoading,
    setResource,
  } = useResource(queryFinancesDB, undefined, undefined);

  const handleContentToDisplay = async (option) => {
    console.log(tableHeadRefs.current);

    const element = tableHeadRefs.current.find(
      (item) =>
        item.textContent.match(/delivery/i) ||
        item.textContent.match(/ride/i) ||
        item.textContent === ""
    );

    element.textContent = option;

    try {
      const response = await queryFinancesDB({ type: option });
      setResource(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overview">
      <OverviewInfo page="Financial Management">
        <CustomFilter text="Filter">
          <FilterGroup
            label="By Status"
            labelStyle="text-xs"
            itemStyle="text-sm py-[6px] border-b"
            styling="px-2"
            options={[
              { label: "All", query: "" },
              { label: "Ride", query: "ride" },
              { label: "Delivery", query: "delivery" },
            ]}
            handleFilter={handleContentToDisplay}
          />
          <FilterGroup
            label="By Date"
            labelStyle="text-xs"
            itemStyle="text-sm py-[6px] w-1/2"
            styling="px-2 mt-2"
            container_styles="flex-center mt-1"
            options={["From", "To"]}
            handleFilter={(item) => console.log(item)}
          />
        </CustomFilter>
      </OverviewInfo>

      <Analytics />

      <div className="mt-8">
        <DisplayTable
          columnsData={finance_management_tablehead}
          bodyData={earnings && earnings.slice(0, 10)}
          tableFor="finances"
          isLoading={isLoading}
          ref={tableHeadRefs}
        />
      </div>
    </div>
  );
};

export default FinancialManagement;
