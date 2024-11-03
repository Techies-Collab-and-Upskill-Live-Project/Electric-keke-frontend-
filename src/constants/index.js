const groupModalShowBtn = {
  "Profile Management": true,
  "Payment Method": true,
  Logout: true,
  "Delete Account": true,
  "edit-profile": false,
};

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
  { title: "Notification" },
  { title: "Security & Privacy" },
  { title: "Support & Feedback" },
  { title: "Delete Account" },
];

const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nassarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
  "FCT Abuja",
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

export const groupModalStyling = {
  "Profile Management": "modal__profile",
  "Payment Method": "modal__paymethod",
  Logout: "modal__dialog",
  "Delete Account": "modal__dialog",
  "edit-profile": "edit-profile__modal",
};

const choose_main = {
  ride: {
    title: "Ready To Go?",
    desc: "Choose how you want to ride with EcoRide",
    btnText1: "Instant Ride",
    btnText2: "Schedule Ride",
  },
  delivery: {
    title: "Instant or Scheduled- You Decide!",
    desc: "Choose how you want to send with EcoRide",
    btnText1: "Instant Delivery",
    btnText2: "Schedule Delivery",
  },
};

export {
  choose_main,
  driver_authProcess,
  footer_note,
  formTitle,
  groupModalShowBtn,
  map_booking,
  map_request,
  nav_links,
  settings,
  states,
};
