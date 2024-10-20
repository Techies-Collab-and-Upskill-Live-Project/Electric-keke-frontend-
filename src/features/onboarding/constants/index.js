export const countryFlag = {
  "+234": "/flag/nigeria.svg",
  "+233": "/flag/ghana.svg",
  "+228": "/flag/togo.svg",
  "+213": "/flag/algeria.svg",
};

export const account_types = [
  { title: "Passenger", icon: "/avatars/passenger.svg", role: "User" },
  { title: "Rider", icon: "/avatars/rider.svg", role: "Rider" },
];

export const otp_choice = [
  { title: "Sms", icon: "/phone.svg" },
  { title: "Email", icon: "/email.svg" },
];

export const onboarding_descs = {
  register:
    "Sign up to start your eco-friendly journey with EcoRide. Join us in making transportation greener and more efficient.",
  complete: "Complete your profile to unlock the full EcoRide experience. ",
  otp: "Choose where you will like to receive your OTP, via Phone number or Gmail.",
  verification: "Enter the OTP sent to your phone to verify your account. ",
  login:
    "Welcome to Eco-Ride join us in making a difference by choosing sustainable transportation. Login to start your eco-friendly journey today!",
  forget:
    "Reset your password to regain access to your Eco-Ride account. We’ll send a code to your registered email oe phone number to help you get back on track.",
  reset_otp:
    "Enter the code sent to your chosen email or phone number to reset your password. This helps us verify your identity and secure your Eco-Ride account.",
  new_password:
    "Create a new password for your Eco-Ride account. Ensure it is strong and secure to protect your information.",
};

export const processes = [
  {
    badgeLabel: "Identity",
    badgeText: 1,
    styling: "process process--shadow",
    badgeTextStyle: "process__current",
    badgeMainStyle: "process__display",
  },
  {
    badgeLabel: "Driver License Front",
    badgeText: 2,
    styling: "process process--shadow",
    badgeTextStyle: "process__current",
    badgeMainStyle: "process__display"
  },
  {
    badgeLabel: "Driver License Back",
    badgeText: 3,
    styling: "process process--shadow",
    badgeTextStyle: "process__current",
    badgeMainStyle: "process__display"
  },
  {
    badgeLabel: "Processing",
    badgeText: 4,
    styling: "process process--shadow",
    badgeTextStyle: "process__current",
    badgeMainStyle: "process__display"
  },
];

export const progressClass = {
  2: "w-[20%]",
  3: "w-[50%]",
  4: "w-[80%]",
  5: "w-[100%]",
};
