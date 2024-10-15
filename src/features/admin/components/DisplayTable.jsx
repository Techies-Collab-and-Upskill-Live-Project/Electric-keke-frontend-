import React, { useEffect, useState } from "react";
import users from "@/mock-data/users";
import finances from "@/mock-data/finances";
import Table, { TableContent } from "./Table";
import UserLoading from "@/components/ErrorBoundary/Fallbacks/UserLoading";
import {
  finance_management_tablehead,
  user_management_tablehead,
} from "../constants";
import fetchContent from "../utils/fetchContents";
import { useGlobalAdminContext } from "../context/AdminContext";

const DisplayTable = ({ contentType }) => {
  const { contentsToDisplay } = useGlobalAdminContext();
  console.log(contentsToDisplay)
  const [loading, setLoading] = useState(true);
  const [contents, setContents] = useState([]);

  useEffect(() => {
    setLoading(true);

    const getContents = async () => {
      try {
        const tableContents = await fetchContent(
          5000,
          contentsToDisplay,
          contentType,
          users,
          finances
        )
          .then((res) => res)
          .catch((err) => console.log(err));
        setLoading(false);
        setContents(tableContents);
      } catch (error) {
        console.log(error);
      }
    };

    getContents();
  }, [contentsToDisplay]);

  return (
    <div className="mt-8 border">
      <Table
        tableheadContent={
          contentType === "user"
            ? user_management_tablehead
            : finance_management_tablehead
        }
      />
      {loading ? (
        <UserLoading />
      ) : (
        <>
          {contents.length < 1 ? (
            <p className="text-center">No data for ...</p>
          ) : (
            <>
              {contents.map((item, index) => {
                return (
                  <TableContent
                    key={item.id + index}
                    {...item}
                    delay={index}
                    userContent={contentType === "user" ? true : false}
                  />
                );
              })}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default DisplayTable;

/**<SingleUser key={item.name} {...item} delay={index} />; */
