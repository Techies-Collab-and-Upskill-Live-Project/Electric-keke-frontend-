import DialogModal from "./DialogModal";
import dispatchables from "@/utils/dispatchables";
import { addItemToLs } from "@/utils/ls";
import { useNavigate } from "react-router-dom";
import { Logout } from "@/services/Logout";
import { useGlobalAuthContext } from "@/contexts/AuthContext";

const LogoutDialog = () => {
  const { showAlert, loading, unloading } = dispatchables();
  const navigate = useNavigate();
  const {AuthenticateLogout } = useGlobalAuthContext();

  const handleChoice1 = () => {
    // just close modal here
    showAlert("no", 'info');
  };

  const handleChoice2 = () => {
    Logout();
    AuthenticateLogout();
    showAlert("Logged Out");
    navigate("/onboarding/login");
  };
  return (
    <DialogModal
      title="Logout of your account"
      description="Are you sure you want to logout?"
      choice1="No"
      choice2="Yes"
      handleChoice1={handleChoice1}
      handleChoice2={handleChoice2}
      choosing
    />
  );
};

export default LogoutDialog;
