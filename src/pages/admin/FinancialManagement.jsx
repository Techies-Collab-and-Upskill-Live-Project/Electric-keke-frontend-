import { DisplayTable, Pagination } from "@/features/admin";
import { finance_management_tablehead } from "@/features/admin/constants";
import { useArray } from "@/hooks/useArray";
import finances from "@/mock-data/finances";

const FinancialManagement = () => {
  const { array: listOfFinances } = useArray(finances);
  return (
    <div className="mt-8">
      <DisplayTable
        columnsData={finance_management_tablehead}
        bodyData={listOfFinances}
        type="finances"
      />
    </div>
  );
};

export default FinancialManagement;
