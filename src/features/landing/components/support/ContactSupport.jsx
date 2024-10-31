import { care_socials } from "../../constants";
import CareSocial from "./CareSocial";
import RegularList from "@/components/_design-patterns/RegularList";

const ContactSupport = () => {
  return (
    <div className="space-y-[50px] w-full pt-10 tablet:pt-[5.3rem] pb-10 tablet:pb-[6.6rem]">
      <RegularList list={care_socials} component={CareSocial} />
    </div>
  );
};

export default ContactSupport;
