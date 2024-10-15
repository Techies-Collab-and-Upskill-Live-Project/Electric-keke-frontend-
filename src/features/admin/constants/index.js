import Finance from "../assets/svgs/Finance";
import Overview from "../assets/svgs/Overview";
import SettingAdmin from "../assets/svgs/SettingAdmin";
import UserManagement from "../assets/svgs/UserManagement";

export const finance_management_tablehead = [
  {
    title: "Transaction No",
    tableClass: "col-span-2 px-2",
  },
  {
    title: "Status",
    tableClass: "col-span-1 justify-self-center px-2",
  },
  {
    title: "Name",
    tableClass: "col-span-3 justify-self-start px-2",
  },
  {
    title: "Date",
    tableClass: "col-span-1 justify-self-start px-2",
  },
  {
    title: "Rides",
    tableClass: "col-span-1 justify-self-start px-2",
  },
  {
    title: "Action",
    tableClass: "col-span-1 px-2",
  },
];

export const user_management_tablehead = [
  {
    title: "User Id",
    tableClass: "col-span-1",
  },
  {
    title: "Name",
    tableClass: "col-span-3 justify-self-start",
  },
  {
    title: "Sign Up Date",
    tableClass: "col-span-2 justify-self-start",
  },
  {
    title: "Status",
    tableClass: "col-span-2 justify-self-start",
  },
  {
    title: "Action",
    tableClass: "col-span-1",
  },
];

export const overview_titles = {
  Overview: "Dashboard Overview",
  "User Management": "Manage Users",
  "Financial Management": "Financial Management",
};

export const overview_descriptions = {
  Overview: "Manage Users and Track Services",
  "User Management": "Manage Users",
  "Financial Management": "Keep Track With Finance",
};

export const user_dashboard = [
  {
    title: "Active Users",
    analysisDigits: 2399,
    percent: 20,
    icon: "/users/users.svg",
  },
  {
    title: "Total Rides",
    analysisDigits: "3000",
    percent: 20,
    icon: "/users/rides.svg",
  },
  {
    title: "Total Deliveries",
    analysisDigits: 298,
    percent: 20,
    icon: "/users/deliveries.svg",
  },
  {
    title: "Disabled Users",
    analysisDigits: 22,
    percent: 20,
    icon: "/users/disabled.svg",
  },
];

export const admin_nav_links = [
  {
    title: "Overview",
    href: "/admin",
    icon: Overview,
  },
  {
    title: "User Management",
    href: "user-management",
    icon: UserManagement,
  },
  {
    title: "Financial Management",
    href: "financial-management",
    icon: Finance,
  },
  {
    title: "Settings",
    href: "settings",
    icon: SettingAdmin,
  },
];

export const user_management_filter = [
  {
    label: "By Status",
    labelStyle: "text-xs",
    itemStyle: "text-sm py-[6px] border-b",
    styling: "px-2",
    options: ["Active Users", "Inactive Users"],
  },
  {
    label: "By Date",
    labelStyle: "text-xs",
    itemStyle: "text-sm py-[6px] w-1/2",
    styling: "px-2 mt-2",
    option_container: "flex-center mt-1",
    options: ["From", "To"],
  },
];

const finance_management_filter = [
  {
    label: "By Status",
    labelStyle: "text-xs",
    itemStyle: "text-sm py-[6px] border-b",
    styling: "px-2",
    options: ["Ride", "Deliveries"],
  },
  {
    label: "By Date",
    labelStyle: "text-xs",
    itemStyle: "text-sm py-[6px] w-1/2",
    styling: "px-2 mt-2",
    option_container: "flex-center mt-1",
    options: ["From", "To"],
  },
];

export const filter_groups = {
  "User Management": user_management_filter,
  "Financial Management": finance_management_filter,
};

export const translate_filter_option = {
  "Active Users": "active",
  "Inactive Users": "inactive",
  Ride: "Complete",
  Deliveries: "Pending",
};
