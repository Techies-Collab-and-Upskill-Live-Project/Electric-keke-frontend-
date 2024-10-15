import Chat from "../../../assets/svg/Chat";
import { useNavigate } from "react-router-dom";
import { useModal } from "@/hooks/useModal";
import { useMedia } from "@/hooks/useMedia";
import ContactModal from "./ContactModal";
import Btn from "@/components/btn/Btn";
import { ProfilePhoto } from "@/features/profile";

const Person = ({ role, fullname, hasArrived }) => {
  const navigate = useNavigate();

  const mediaSmall = useMedia("(max-width:500px)");

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className="person-details">
      <div className="flex items-center gap-x-10">
        <div className="size-[103px] bg-red-500 rounded-full bg-gradient-to-tl relative from-[#949494] to-neutral">
          <ProfilePhoto styling="inset-[3px] absolute" />
        </div>
        <div>
          <p className="person-name">{fullname}</p>
          {role === "User" && <p className="rider-status">On his way...</p>}
        </div>
      </div>

      {!hasArrived && (
        <div className="flex-center gap-x-9">
          <Btn
            icon={
              <Chat
                width={mediaSmall ? 41 : 50}
                height={mediaSmall ? 33 : 41}
              />
            }
            className="bg-transparent p-0"
            onClick={() => navigate("/chat")}
          />
          <ContactModal
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
            smallMedia={mediaSmall}
          />
        </div>
      )}
    </div>
  );
};

export default Person;
