import { getItemFromLs } from "../utils/ls";
import { useState } from "react";

export const useCurrentUser = (person = "user") => {
  const [user, setUser] = useState(getItemFromLs(person) || null);

  const resetUser = (userdata) => {
    setUser(userdata);
  };

  return {user, resetUser};
};
