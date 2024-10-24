import dispatchables from "@/utils/dispatchables";
import { useNavigate } from "react-router-dom";
import DialogModal from "./DialogModal";
import { DeleteAccount } from "@/services/DeleteAccount";

const DeleteDialog = () => {
  const { showAlert, loading, unloading } = dispatchables();

  const navigate = useNavigate();

  const handleChoice1 = () => {
    showAlert("no");
  };

  const handleChoice2 = async () => {
    try {
      const data = await DeleteAccount();
      unloading();
      console.log(data);
      // showAlert("Deleted Account Succesfully");
      navigate("/");
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <DialogModal
      title="Delete account?"
      description="Complete this process by clicking the link sent to your email"
      handleChoice1={handleChoice1} handleChoice2={() => console.log('yes')}
    />
  );
};

export default DeleteDialog;
