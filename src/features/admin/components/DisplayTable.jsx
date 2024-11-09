import users from "@/mock-data/users";
import finances from "@/mock-data/finances";
import fetchContent from "../utils/fetchContents";
import { useGlobalAdminContext } from "../context/AdminContext";
import { useResource } from "@/hooks/useResource";
import {
  Table,
  TableBody,
  TableHead,
  TableItem,
} from "@/components/_custom-ui/Table";
import UserManagementTableContent from "./UserManagementTableContent";
import FinanceManagementTableContent from "./FinanceManagementTableContent";
import { Pagination } from "..";
import { forwardRef } from "react";

const DisplayTable = forwardRef(
  ({ columnsData, bodyData, tableFor, isLoading }, ref) => {
    const displayBodyContent = () => {
      switch (tableFor) {
        case "users":
          return isLoading ? (
            <div>loading...</div>
          ) : (
            <UserManagementTableContent data={bodyData} />
          );
        case "finances":
          return isLoading ? (
            <div>loading...</div>
          ) : (
            <FinanceManagementTableContent data={bodyData} />
          );
        default:
          break;
      }
    };

    return (
      <>
        <Table styling="w-full">
          <TableHead styling="flex items-center">
            {columnsData?.map((item) => (
              <TableItem
                key={item.title}
                styling={item.styling}
                ref={(e) => {
                  if (e && !ref.current.includes(e)) {
                    ref.current.push(e);
                  }
                }}
              >
                {item.title}
              </TableItem>
            ))}
          </TableHead>
          <TableBody styling="min-h-[652px]">{displayBodyContent()}</TableBody>
        </Table>

        <Pagination />
      </>
    );
  }
);

export default DisplayTable;
