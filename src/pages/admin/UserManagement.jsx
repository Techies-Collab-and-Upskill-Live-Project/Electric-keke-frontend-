import { FilterGroup } from "@/components/_custom-ui/Filter";
import CustomFilter from "@/components/CustomFilter";
import { DisplayTable } from "@/features/admin";
import OverviewInfo from "@/features/admin/_layout/OverviewInfo";
import { user_fetch_options, user_management_tablehead } from "@/features/admin/constants";
import fetchContentForTable from "@/features/admin/utils/fetchContents";
import { useResource } from "@/hooks/useResource";
import mock_users from "@/mock-data/users";
import { useEffect, useState } from "react";

const UserManagement = () => {
  const [contents, setContents] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [contentsToDisplay, setContentsToDisplay] = useState("All");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const data = await fetchContentForTable(
          mock_users,
          contentsToDisplay,
          "status",
          user_fetch_options[contentsToDisplay],
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
      <OverviewInfo page="User Management">
        <CustomFilter>
          <FilterGroup
            label="By Status"
            labelStyle="text-xs"
            itemStyle="text-sm py-[6px] border-b"
            styling="px-2"
            options={["Active Users", "Inactive Users"]}
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

      <div className="mt-8">
        <DisplayTable
          columnsData={user_management_tablehead}
          bodyData={contents}
          tableFor="users"
          isLoading={isLoading}
        />
      </div>
    </>
  );
};

export default UserManagement;
