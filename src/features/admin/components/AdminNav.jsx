import { Link, useLocation } from "react-router-dom";
import { admin_nav_links } from "../constants";
import React from "react";
import RegularList from "@/components/_design-patterns/RegularList";
import AdminNavListItem from "./AdminNavListItem";

const AdminNav = ({ containerStyling = "admin_nav" }) => {
  const { pathname } = useLocation();
  const activeLink = pathname.slice(7);

  return (
    <nav className={containerStyling}>
      <RegularList
        list={admin_nav_links}
        component={AdminNavListItem}
        activeLink={activeLink}
        keyExtractor={admin_nav_links.map((item) => item.title)}
      />
    </nav>
  );
};

export default AdminNav;
