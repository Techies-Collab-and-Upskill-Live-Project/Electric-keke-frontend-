export const groupModalStyling = (type) => {
  const modalStyles = {
    "Profile Management": "modal__profile",
    "Payment Method": "modal__paymethod",
    Logout: "modal__dialog",
    "Delete Account": "modal__dialog",
    "edit-profile": "edit-profile__modal",
  };
  return modalStyles[type];
};
