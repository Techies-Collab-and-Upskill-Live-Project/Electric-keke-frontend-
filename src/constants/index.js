import Finance from "@/assets/svg/Finance";
import Overview from "@/assets/svg/Overview";
import SettingAdmin from "@/assets/svg/SettingAdmin";
import UserManagement from "@/assets/svg/UserManagement";

const groupModalShowBtn = {
  "Profile Management": true,
  "Payment Method": true,
  Logout: true,
  "Delete Account": true,
  "edit-profile": false,
};



const socials = [
  {
    title: "facebook",
    icon: "/socials/facebook.svg",
  },
  {
    title: "x",
    icon: "/socials/x.svg",
  },
  {
    title: "whatsapp",
    icon: "/socials/whatsapp.svg",
  },
  {
    title: "instagram",
    icon: "/socials/instagram.svg",
  },
];

const nav_links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Earn With Us", href: "/earn-with-us" },
  { title: "Support", href: "/support" },
];

const formTitle = {
  register: "Register Your Account!",
  complete: "Complete Your Profile!",
  otpMethod: "OTP!",
  verification: "Complete Your Profile!",
  congrats: "Continue to Log in",
  login: "Log in to your Account",
  forget: "Forgot Password",
  new: "Enter New Password",
  update: "Enter Code",
};

const footer_note =
  "Eco-Ride is more than just a service—it's a movement towards a more sustainable and efficient future.Whether you're booking a ride, sending a package, or planning ahead, Eco-Ride is here to meet your needs while caring for the planet";

const settings = [
  { title: "Profile Management" },
  { title: "Payment Method" },
  { title: "Notification", href: "/notification" },
  { title: "Security & Privacy" },
  { title: "Support & Feedback" },
  { title: "Delete Account" },
];

const admin_nav_links = [
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

const user_dashboard = [
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

const finance_management_tablehead = [
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

const user_management_tablehead = [
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

const overview_titles = {
  Overview: "Dashboard Overview",
  "User Management": "Manage Users",
  "Financial Management": "Financial Management",
};

const overview_descriptions = {
  Overview: "Manage Users and Track Services",
  "User Management": "Manage Users",
  "Financial Management": "Keep Track With Finance",
};

const states = [
  "Abia",
  "Adamawa",
  "Akwa-ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Cross-river",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Imo",
  "Jigawa",
  "Enugu",
  "Plateus",
  "Kogi",
  "Ondo",
  "Osun",
];

const driver_authProcess = [
  {
    img: "/selfie.svg",
    title: "Take A Selfie of Yourself",
    desc: "your face has to be well lit and well positioned, make sure you don't have any background light.",
  },
  {
    img: "/license-card.svg",
    title: "Driver's License",
    desc: "Upload a clear front picture of your drivers license, showing all corners of the drivers license.",
  },
  {
    img: "/license-card.svg",
    title: "Driver's License",
    desc: "Upload a clear back picture of your drivers license, showing all corners of the drivers license.",
  },
  {
    title: "Processing",
    desc: "We are reviewing the information you provide to verify your identity. verification process takes 24 hours, a notification will be sent to your email.",
  },
];

const map_booking = {
  title: "Where Are You Headed?",
  desc: "Start your eco-friendly journey by entering your pickup location and drop-off destination.",
};

const map_request = {
  title: "New Ride Request",
  desc: "You just received a new ride request",
};

const user_management_filter = [
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

export {
  admin_nav_links,
  driver_authProcess,
  finance_management_tablehead,
  footer_note,
  formTitle,
  groupModalShowBtn,
  map_booking,
  map_request,
  nav_links,
  overview_titles,
  overview_descriptions,
  settings,
  socials,
  states,
  user_dashboard,
  user_management_tablehead,
  user_management_filter,
};
