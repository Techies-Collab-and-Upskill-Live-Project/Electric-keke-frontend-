import dispatchables from "@/utils/dispatchables";
import Btn from "@/components/btn/Btn";
import Heading from "@/components/Heading";
import CustomModal from "@/components/CustomModal";
import Call from "@/assets/svg/Call";
import IconWrapper from "@/components/IconWrapper";
import { useResource } from "@/hooks/useResource";

const ContactModal = ({ isModalOpen, openModal, closeModal, connect }) => {
  const { showAlert } = dispatchables();

  const { resource: bookData } = useResource(
    () => console.log("bookData"),
    "bookData"
  );

  const callInApp = () => {
    showAlert(`Calling ${bookData?.passenger_phone || 'rider'} in app`, "info");
  };
  
  const callOffApp = () => {
    showAlert(`Calling ${bookData?.passenger_phone || 'rider'} off app`, "info");
  };

  return (
    <CustomModal
      trigger={Btn}
      triggerProps={{
        icon: (
          <IconWrapper
            iconElement={Call}
            iconElementProps={{ type: connect ? "connect" : "rider" }}
            containerStyle="size-9"
          />
        ),
        styling: "bg-transparent p-0",
      }}
      modalContainerStyling="flex-center"
      modalStyling="modal__contact"
      isModalOpen={isModalOpen}
      openModal={openModal}
      closeModal={closeModal}
    >
      <Heading
        className="text-center"
        title="Choose your preferred Call option"
        tclass="text-eiteen md:text-[2rem] font-bold"
        description="You can contact the passenger directly through the app or call their phone number."
        dclass="text-sm"
      />

      <div className="mt-6 space-y-6">
        <Btn
          key="in-app"
          styling="call__opt"
          text="In App Call"
          icon={
            <IconWrapper
              iconElement={Call}
              iconElementProps={{ type: "passenger" }}
              containerStyle="size-5"
            />
          }
          onClick={callInApp}
        />

        <Btn
          key="out-app"
          styling="call__opt"
          text="Call Phone Number"
          icon={
            <IconWrapper
              iconElement={Call}
              iconElementProps={{ type: "passenger" }}
              containerStyle="size-5"
            />
          }
          onClick={callOffApp}
        />
      </div>
    </CustomModal>
  );
};

export default ContactModal;
