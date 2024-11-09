import Chat from "../../../assets/svg/Chat";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/useModal";
import ContactModal from "./ContactModal";
import Btn from "@/components/btn/Btn";
import { ProfilePhoto } from "@/features/profile";
import IconWrapper from "@/components/IconWrapper";

const Person = ({ role, fullname, photo, rideCompleted }) => {
  const navigate = useNavigate();

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="person-details">
      <div className="flex items-center gap-x-1 md:gap-x-3 lg:gap-x-10">
        <ProfilePhoto
          sharedStyle="size-[50px] md:size-20 lg:size-[103px] rounded-full bg-gradient-to-tl relative from-[#949494] to-neutral p-[3px]"
          styling=""
          imageUrl={photo}
          noImageContainerStyle="flex-center"
          text={fullname[0]}
          textStyle="text-neutral-900 text-2xl"
        />

        <div>
          <p className="person-name">{fullname}</p>
          {role === "User" && <p className="rider-status">On his way...</p>}
        </div>
      </div>

      {!rideCompleted && (
        <div className="flex-spread gap-x-1 md:gap-x-3 lg:gap-x-9 w-[100px] lg:w-[123px]">
          <Btn
            icon={
              <IconWrapper
                iconElement={Chat}
                containerStyle="size-10"
              />
            }
            className="p-0 bg-transparent"
            onClick={() => navigate("/chat")}
          />

          <ContactModal
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default Person;
