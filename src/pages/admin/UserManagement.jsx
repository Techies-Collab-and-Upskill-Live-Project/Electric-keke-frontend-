import { FilterGroup } from "@/components/_custom-ui/Filter";
import CustomFilter from "@/components/CustomFilter";
import { DisplayTable } from "@/features/admin";
import OverviewInfo from "@/features/admin/_layout/OverviewInfo";
import { user_management_tablehead } from "@/features/admin/constants";
import { useResource } from "@/hooks/useResource";
import { queryUserDB } from "@/features/admin/services/queryUserDB";
import { useRef } from "react";
import BoardManagement from "@/features/admin/components/BoardManagement";

const UserManagement = () => {
  const tableHeadRefs = useRef([]);

  const {
    resource: users,
    isLoading,
    setResource,
  } = useResource(queryUserDB, undefined, undefined);

  const handleContentToDisplay = async (queryOption) => {
    try {
      const data = await queryUserDB({ status: queryOption });
      setResource(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overview">
      <BoardManagement />
      
      <OverviewInfo page="User Management">
        <CustomFilter text="Filter">
          <FilterGroup
            label="By Status"
            labelStyle="text-xs"
            itemStyle="text-sm py-[6px] border-b"
            styling="px-2"
            options={[
              { label: "All", query: "" },
              { label: "Active Users", query: "active" },
              { label: "Inactive Users", query: "inactive" },
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

      <div className="mt-8">
        <DisplayTable
          columnsData={user_management_tablehead}
          bodyData={users && users.slice(0, 10)}
          tableFor="users"
          isLoading={isLoading}
          ref={tableHeadRefs}
        />
      </div>
    </div>
  );
};

export default UserManagement;
