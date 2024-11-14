import FormSelect from "@/components/forms/FormSelect";
import FormRow from "../../../components/forms/FormRow";
import dispatchables from "@/utils/dispatchables";

const BankForm = () => {
  const { showAlert } = dispatchables();
  const handleSelect = (val) => {
    showAlert(`${val} choosen`, "info");
  };
  return (
    <div className="flex flex-col justify-between mt-4 md:mt-10">
      <div className="flex flex-col gap-4 md:gap-10">
        <FormSelect
          label="Bank"
          selectStyle="profile-modal-inputs"
          styling="w-full max-w-[411px] mx-auto"
          itemsList={["Access", "UBA", "First Bank"]}
          handleSelect={handleSelect}
        />
        <FormRow
          label="Bank Account"
          placeholder="Enter 10 digit Account number"
          styling="w-full max-w-[411px] mx-auto"
          inputclass="profile-modal-inputs"
        />
      </div>
    </div>
  );
};

export default BankForm;
