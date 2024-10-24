import { FilterGroup } from "@/components/_custom-ui/Filter";
import CustomFilter from "@/components/CustomFilter";
import { DisplayTable } from "@/features/admin";
import OverviewInfo from "@/features/admin/_layout/OverviewInfo";
import Analytics from "@/features/admin/components/Analytics";
import { finance_management_tablehead, finances_fetch_options } from "@/features/admin/constants";
import fetchContentForTable from "@/features/admin/utils/fetchContents";
import mock_finances from "@/mock-data/finances";
import { useEffect, useState } from "react";

const FinancialManagement = () => {
  const [contents, setContents] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [contentsToDisplay, setContentsToDisplay] = useState("All");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await fetchContentForTable(
          mock_finances,
          contentsToDisplay,
          "status",
          finances_fetch_options[contentsToDisplay],
        );
        setContents(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [contentsToDisplay]);

  const handleContentToDisplay = (option) => {
    setContentsToDisplay((prev) => (prev === option ? "All" : option));
  };

  return (
    <>
      <OverviewInfo page="Financial Management">
      <CustomFilter>
          <FilterGroup
            label="By Status"
            labelStyle="text-xs"
            itemStyle="text-sm py-[6px] border-b"
            styling="px-2"
            options={["Complete", "Pending"]}
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
          bodyData={contents}
          tableFor="finances"
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default FinancialManagement;
