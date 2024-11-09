import { TableContent, TableItem } from "@/components/_custom-ui/Table";
import Heading from "@/components/Heading";
import React from "react";
import TakeAction from "../assets/svgs/TakeAction";
import { CustomFilter, ProfilePhoto } from "@/components";
import { FilterGroup } from "@/components/_custom-ui/Filter";
import dispatchables from "@/utils/dispatchables";

const status_text_color= {
  completed: "text-basic",
  in_progress: 'text-orange-500',
  pending: "text-warning-200",
  cancelled: 'text-error-200'
};

const FinanceManagementTableContent = ({ data }) => {
  const {showAlert} = dispatchables();
  return (
    <>
    {data.length === 0 && <div>No Data</div>}
      {data.map(
        ({
          transaction_no: transaction_id,
          rider_name: name,
          rider_email: email,
          date,
          status,
          price,
        }) => {
          return (
            <TableContent key={transaction_id} styling="flex items-center">
              <TableItem styling="flex-center py-4 w-[15%]">
                <p>{transaction_id}</p>
              </TableItem>

              <TableItem styling="flex items-center gap-x-2 py-4 w-[15%]">
                <p
                  className={status_text_color[status]}
                >
                  {status}
                </p>
              </TableItem>

              <TableItem styling="flex items-center gap-x-2 py-4 w-[31%]">
                <ProfilePhoto
                  imageUrl=""
                  noImageContainerStyle="size-11 rounded-full bg-basic-500 backdrop:blur-md flex-center"
                  text={name[0]}
                  textStyle="text-neutral"
                />
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
                <p>{price}</p>
              </TableItem>

              <TableItem styling="py-4">
              <CustomFilter key={name} icon={<TakeAction />}>
                  <FilterGroup
                    container_styles="flex flex-col gap-y-2"
                    options={[
                      { label: "Action 1", query: "action 1" },
                      { label: "Action 2", query: "action 2" },
                    ]}
                    handleFilter={(option) =>
                      showAlert(`is it ${option} for ${name}`, "info")
                    }
                  />
                </CustomFilter>
              </TableItem>
            </TableContent>
          );
        }
      )}
    </>
  );
};

export default FinanceManagementTableContent;
