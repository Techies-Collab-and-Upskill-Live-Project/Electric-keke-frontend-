import { icons } from "@/assets";
import FormRow from "@/components/forms/FormRow";

const { MasterCircles } = icons;

const CardForm = ({ name, expiry, number, cvv, handleChange }) => {

  return (
    <div className="option-card-form-content mt-3 md:mt-6">
      <div className="card-content-group">
        <FormRow
          label="Name on card"
          labelClass="text-xs"
          name="name"
          value={name}
          placeholder="susan michael"
          formRowContainer="col-span-2"
          inputclass="profile-modal-inputs"
          styling="flex-[2]"
          handleChange={handleChange}
        />
        <FormRow
          label="Expiry"
          labelClass="text-xs"
          name="expiry"
          value={expiry}
          inputclass="profile-modal-inputs"
          styling="flex-1"
          handleChange={handleChange}
        />
      </div>
      <div className="card-content-group">
        <FormRow
          label="Card number"
          labelClass="text-xs"
          name="number"
          value={number}
          placeholder="000 000 000"
          styling="flex-[2]"
          icon={<MasterCircles />}
          inputclass="profile-modal-inputs !pl-16"
          handleChange={handleChange}
        />
        <FormRow
          label="CVV"
          labelClass="text-xs"
          name="cvv"
          inputclass="profile-modal-inputs"
          styling="flex-1"
          value={cvv}
          placeholder="000"
          handleChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CardForm;
