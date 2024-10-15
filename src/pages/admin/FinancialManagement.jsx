import { DisplayTable, Pagination } from "@/features/admin";

const FinancialManagement = () => {
  return (
    <>
      <DisplayTable
        contentType="finances"
      />
      <Pagination />
    </>
  );
};

export default FinancialManagement;
