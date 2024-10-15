import { DisplayTable, Pagination } from "@/features/admin";

const UserManagement = () => {
  return (
    <div className="mt-8">
      <DisplayTable contentType="user" />
      <Pagination />
    </div>
  );
};

export default UserManagement;
