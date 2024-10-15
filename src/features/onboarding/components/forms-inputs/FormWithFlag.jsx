import CustomSelectItem from "@/components/CustomSelectItem";
import SelectInput from "@/components/SelectInput";
import { countryFlag } from "../../constants";

const FormWithFlag = ({ placeholder, handleSelect, code }) => {
  return (
    <div className="w-[108px] h-9 flex-spread">
      <div className="w-[40%] h-[26px]">
        <img src={countryFlag[code]} alt={code} className="image" />
      </div>

      <SelectInput
        placeholder={placeholder}
        children={<CustomSelectItem items={Object.keys(countryFlag)} />}
        handleFunc={(value) => handleSelect(value)}
        className="h-[26px] w-1/2 p-0 border-none outline-none focus:outline-none"
      />
    </div>
  );
};

export default FormWithFlag;
