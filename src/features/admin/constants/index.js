import Finance from "../assets/svgs/Finance";
import MessageIcon from "../assets/svgs/message";
import Overview from "../assets/svgs/Overview";
import ReviewIcon from "../assets/svgs/review-icon";
import SettingAdmin from "../assets/svgs/SettingAdmin";
import UserManagement from "../assets/svgs/UserManagement";

export const finance_management_tablehead = [
  {
    title: "Transaction No",
    styling: "py-4 flex-center w-[15%] text-[#525252] font-semibold",
  },
  {
    title: "Status",
    styling: "py-4 flex items-center w-[15%] text-[#525252] font-semibold",
  },
  {
    title: "Name",
    styling: "py-4 flex items-center w-[31%] text-[#525252] font-semibold",
  },
  {
    title: "Date",
    styling: "py-4 flex items-center w-[14%] text-[#525252] font-semibold",
  },
  {
    title: "Delivery",
    styling:
      "py-4 flex items-center w-[14%] text-[#525252] font-semibold capitalize",
  },
  {
    title: "Action",
    styling: "py-4 flex items-center text-[#525252] font-semibold",
  },
];

export const user_management_tablehead = [
  {
    title: "User Id",
    styling: "flex-center text-[#525252] font-semibold py-4 w-[15%]",
  },
  {
    title: "Name",
    styling: "flex items-center text-[#525252] font-semibold py-4 w-[31%]",
  },
  {
    title: "Sign Up Date",
    styling: "flex items-center text-[#525252] font-semibold py-4 w-[22%]",
  },
  {
    title: "Status",
    styling: "flex items-center text-[#525252] font-semibold py-4 w-[22%]",
  },
  {
    title: "Action",
    styling: "flex items-center text-[#525252] font-semibold py-4",
  },
];

export const overview_titles = {
  Overview: "Dashboard Overview",
  "User Management": "Manage Users",
  "Financial Management": "Financial Management",
};

export const overview_descriptions = {
  Overview: "Manage Users and Track Activity",
  "User Management": "Manage Users",
  "Financial Management": "Keep Track With Finance",
};

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
    title: "Message",
    href: "message",
    icon: MessageIcon,
  },
  {
    title: "Reviews",
    href: "reviews",
    icon: ReviewIcon,
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

export const show_board = {
  "/admin": true,
  "/admin/user-management": true,
  "/admin/financial-management": false,
  "/admin/settings": false,
};

export const sideBarMargin = {
  Overview: "mt-0 md:mt-[77px]",
  "User Management": "mt-0 md:mt-[77px]",
  "Financial Management": "mt-0 md:mt-[77px]",
  Settings: "mt-0",
};

export const user_fetch_options = {
  All: "All",
  "Inactive Users": "inactive",
  "Active Users": "active",
};

export const finances_fetch_options = {
  All: "All",
  Complete: "Complete",
  Pending: "Pending",
};

export const customers_notifications = [
  
  {
    title: "New Ride Request",
    description:
      "New ride request from [User Name] at [Location]. Please review and assign a driver.",
  },
  {
    title: "Driver Arrival Delay",
    description:
      "Mike anderson is delayed on route to Susan micheal pickup point. Notify the user?",
  },
  {
    title: "Delivery Assignment",
    description:
      "Evelyn booked an inspection with Kesh Apartments. The options of Virtual and physical inspection were selected. Waiting for your.",
  },
  {
    title: "New Ride Request",
    description:
      "New ride request from [User Name] at [Location]. Please review and assign a driver.",
  },
  {
    title: "Driver Arrival Delay",
    description:
      "Mike anderson is delayed on route to Susan micheal pickup point. Notify the user?",
  },
  {
    title: "Delivery Assignment",
    description:
      "Evelyn booked an inspection with Kesh Apartments. The options of Virtual and physical inspection were selected. Waiting for your.",
  },
];
