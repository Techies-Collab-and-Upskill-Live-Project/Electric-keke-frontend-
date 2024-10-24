import { DisplayTable, Pagination } from "@/features/admin";
import { user_management_tablehead } from "@/features/admin/constants";
import { useArray } from "@/hooks/useArray";
import users from "@/mock-data/users";

const UserManagement = () => {
  const { array: listOfUsers } = useArray(users);

  return (
    <div className="mt-8">
      <DisplayTable
        columnsData={user_management_tablehead}
        bodyData={listOfUsers}
        type="users"
      />
    </div>
  );
};

export default UserManagement;
