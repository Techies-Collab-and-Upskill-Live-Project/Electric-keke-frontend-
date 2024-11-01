import Chat from "../../../assets/svg/Chat";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/useModal";
import ContactModal from "./ContactModal";
import Btn from "@/components/btn/Btn";
import { ProfilePhoto } from "@/features/profile";
import IconWrapper from "@/components/IconWrapper";

const Person = ({ role, fullname, hasArrived, photo }) => {
  const navigate = useNavigate();

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="person-details">
      <div className="flex items-center gap-x-10">
        <ProfilePhoto
          styling="size-[50px] md:size-[103px] rounded-full bg-gradient-to-tl relative from-[#949494] to-neutral p-[3px]"
          imageUrl={photo}
        />

        <div>
          <p className="person-name">{fullname}</p>
          {role === "User" && <p className="rider-status">On his way...</p>}
        </div>
      </div>

      {!hasArrived && (
        <div className="flex-center gap-x-9">
          <Btn
            icon={
              <IconWrapper
                iconElement={Chat}
                containerStyle="w-10 md:w-[50px] h-8 md:h-10"
              />
            }
            className="bg-transparent p-0"
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
