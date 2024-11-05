import { TableContent, TableItem } from "@/components/_custom-ui/Table";
import Btn from "@/components/btn/Btn";
import Heading from "@/components/Heading";
import React from "react";
import TakeAction from "../assets/svgs/TakeAction";
import { CustomFilter, ProfilePhoto } from "@/components";
import { FilterGroup } from "@/components/_custom-ui/Filter";
import dispatchables from "@/utils/dispatchables";

const bg_status = {
  active: "bg-basic",
  inactive: "bg-error",
};

const UserManagementTableContent = ({ data }) => {
  const { showAlert } = dispatchables();
  return (
    <>
      {data.map(
        ({ id, fullname, email, phone, signup_date: created, status }) => {
          return (
            <TableContent styling="flex items-center">
              <TableItem styling="flex-center py-4 w-[15%]">
                <p>{id.substring(0, 5)}...</p>
              </TableItem>

              <TableItem styling="flex items-center gap-x-2 py-4 w-[31%]">
                <ProfilePhoto
                  imageUrl=""
                  noImageContainerStyle="size-11 rounded-full bg-basic-500 backdrop:blur-md flex-center"
                  text={fullname[0]}
                  textStyle="text-neutral"
                />
                <Heading
                  title={fullname}
                  description={`${email.slice(0, 2)}...${email.slice(-9)}`}
                  tclass="text-base font-medium"
                  dclass="text-sm"
                />
              </TableItem>

              <TableItem styling="py-4 w-[22%]">
                <p>{created}</p>
              </TableItem>

              <TableItem styling="flex items-center gap-x-2 py-4 w-[22%]">
                <span className={`size-3 rounded-full ${bg_status[status]}`} />
                <p>{status}</p>
              </TableItem>

              <TableItem styling="py-4">
                <CustomFilter key={fullname} icon={<TakeAction />}>
                  <FilterGroup
                    container_styles="flex flex-col gap-y-2"
                    options={[
                      { label: "Action 1", query: "action 1" },
                      { label: "Action 2", query: "action 2" },
                    ]}
                    handleFilter={(option) =>
                      showAlert(`is it ${option} for ${fullname}`, "info")
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

export default UserManagementTableContent;
