import FormRow from "@/components/forms/FormRow";
import SelectInput from "@/components/SelectInput";
import Choose from "@/components/Choose";
import FormDate from "@/components/forms/FormDate";
import FormSelect from "@/components/forms/FormSelect";
import generateTime from "../utils/generateTime";
import generateCount from "../utils/generateCount";
import { type_of_goods } from "../constants";

const ScheduleForm = ({
  scheduleType,
  scheduleFormData,
  handleDate,
  handleChange,
  setQuantity,
  setTime,
  choseToShareRide,
}) => {
  return (
    <form className="schedule-form" onSubmit={(e) => e.preventDefault()}>
      <FormRow
        name="origin"
        label="Enter Your Location"
        styling="font-inter"
        value={scheduleFormData.origin}
        handleChange={handleChange}
        inputclass="schedule-input w-full"
      />

      <FormRow
        name="destination"
        label="Enter Your Destination"
        styling="font-inter"
        value={scheduleFormData.destination}
        handleChange={handleChange}
        inputclass="schedule-input w-full"
      />

      <FormDate
        label="Select Date"
        styling="font-inter flex flex-col"
        dateStyle="schedule-input w-full"
        handleDate={handleDate}
      />

      <FormSelect
        label="Select Time"
        itemsList={generateTime()}
        selectStyle="schedule-input"
        handleSelect={setTime}
      />

      <FormSelect
        label={
          scheduleType === "ride" ? "Number of Passengers" : "Number of Goods"
        }
        itemsList={generateCount()}
        styling="font-inter"
        selectStyle="schedule-input"
        handleSelect={setQuantity}
      />

      {scheduleType === "ride" ? (
        <div>
          <span>Share a ride?</span>

          <Choose
            containerClass="schedule-input flex-center !p-0 !border-none gap-x-[30px]"
            choice1txt="Yes"
            choice2txt="No"
            btnClass="h-full btn w-1/2 bg-transparent border text-black border-basic"
            handleChoice1={() => choseToShareRide("Yes")}
            handleChoice2={() => choseToShareRide("No")}
          />
        </div>
      ) : (
        <FormSelect
          itemsList={type_of_goods}
          label="Type of goods (no hazardous or illegal goods accepted)"
          labelStyle="text-xs tablet:text-xs"
          styling="font-inter"
          selectStyle="schedule-input"
        />
      )}
    </form>
  );
};

export default ScheduleForm;
