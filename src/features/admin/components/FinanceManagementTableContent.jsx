import { TableContent, TableItem } from "@/components/_custom-ui/Table";
import Btn from "@/components/btn/Btn";
import Heading from "@/components/Heading";
import React from "react";
import TakeAction from "../assets/svgs/TakeAction";

const bg_status = {
  active: "bg-basic",
  inactive: "bg-error",
};

const FinanceManagementTableContent = ({ data }) => {
  console.log(data);
  return (
    <>
      {data.map(({ transaction_id, name, email, date, status, delivery }) => {
        return (
          <TableContent styling="flex items-center">
            <TableItem styling="flex-center py-4 w-[15%]">
              <p>{transaction_id}</p>
            </TableItem>

            <TableItem styling="flex items-center gap-x-2 py-4 w-[15%]">
              <p>{status}</p>
            </TableItem>

            <TableItem styling="flex items-center gap-x-2 py-4 w-[31%]">
              <div className="size-11 rounded-full bg-slate-400" />
              <Heading
                title={name}
                description={email}
                tclass="text-base font-medium"
                dclass="text-sm"
              />
            </TableItem>

            <TableItem styling="py-4 w-[14%]">
              <p>{date}</p>
            </TableItem>

            <TableItem styling="py-4 w-[14%]">
              <p>{delivery}</p>
            </TableItem>

            <TableItem styling="py-4">
              <Btn icon={<TakeAction />} styling="bg-transparent" />
            </TableItem>
          </TableContent>
        );
      })}
    </>
  );
};

export default FinanceManagementTableContent;
