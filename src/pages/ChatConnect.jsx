import useTitle from "../hooks/useTitle";
import Spear from "../assets/svg/Spear";
import ConnectChatBoard from "../features/contact/components/ConnectChatBoard";
import Btn from "@/components/btn/Btn";
import { useModal } from "@/hooks/useModal";
import ContactModal from "@/features/tracking/components/ContactModal";
import { ProfilePhoto } from "@/components";
import { useResource } from "@/hooks/useResource";
import { useCurrentUser } from "@/hooks/useCurrentUser";

const ChatConnect = () => {
  useTitle("Connect");
  const user = useCurrentUser();
  const { resource: bookData } = useResource(
    () => console.log("bookData"),
    "bookData"
  );
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section className="md:pb-10">
      <header className="md:h-[119px] pt-3 pb-[10px] md:pt-0 md:mb-0 bg-gradient-to-r from-[#4B974B] to-[#234623] flex-center home-pad">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Btn
                icon={<Spear color="white" />}
                styling="bg-transparent p-0"
                onClick={() => history.back()}
              />

              <ProfilePhoto
                imageUrl="/persons/profile.jpeg"
                styling="size-9 md:size-16 rounded-full flex-center"
              />
            </div>

            <h2 className="text-white text-base font-bold">
              {user?.role === "User"
                ? bookData?.rider_name
                : bookData?.passenger_name}
            </h2>
          </div>

          <ContactModal
            isModalOpen={isModalOpen}
            openModal={openModal}
            closeModal={closeModal}
            connect
          />
        </div>
      </header>

      <div className="home-pad mt-4 md:mt-10 h-[82vh] md:h-[693px] flex flex-col">
        <h3 className="text-eiteen md:text-2xl font-bold font-josefin">
          Send a message...
        </h3>

        <ConnectChatBoard />
      </div>
    </section>
  );
};

export default ChatConnect;
