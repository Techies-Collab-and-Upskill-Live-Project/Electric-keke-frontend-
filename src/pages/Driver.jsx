import Section from "../layouts/Section";
import { useEffect, useState } from "react";
import Statistics from "../features/booking/components/Statistics";
import dispatchables from "../utils/dispatchables";
import NewRideModal from "@/features/booking/components/NewRideModal";
import { useModal } from "@/hooks/useModal";
import Choose from "@/components/Choose";
import IconWrapper from "@/components/IconWrapper";
import { useSelector } from "react-redux";
import { useGlobalAuthContext } from "@/contexts/AuthContext";

const Driver = () => {
  const notification = useSelector((state) => state.notificationData);
  const { user } = useGlobalAuthContext();
  console.log(user);

  // const { showAlert, newNotification } = dispatchables();
  const [online, setOnline] = useState(false);
  const { isModalOpen: isNewRequest, openModal, closeModal } = useModal();

  useEffect(() => {
    if (notification) {
      const {
        message: { type },
      } = notification;
      if (type === "new_booking_notification") {
        openModal();
      }
    }
  }, [notification]);

  return (
    <>
      <NewRideModal
        isModalOpen={isNewRequest}
        openModal={openModal}
        closeModal={closeModal}
      />

      <Section darkLogo mobileHeaderStyle="mobile-header">
        <div className="driver-board">
          {user?.wallet_balance < 0 && (
            <p className="text-xs font-semibold text-center text-error md:text-xl">
              To continue receiving cash trips, Kindly pay your outstanding debt
              of 5,000
            </p>
          )}

          <div className="driver">
            <Choose
              containerClass="w-[225px] md:w[310px] h-11 md:h-16 rounded-[2rem] bg-white flex-center mt-6 md:mt-10 py-1 px-2  ml-auto md:mr-5"
              choice1txt={online ? "Online" : "Go Online"}
              choice2txt={online ? "Go Offline" : "Offline"}
              btnClass="rounded-full w-1/2 md:h-14 md:w-[171px]"
              addedClass1={online ? "driver-online-btn" : "driver-offline-btn"}
              addedClass2={online ? "driver-offline-btn" : "driver-online-btn"}
              condition={online}
              handleChoice1={() => setOnline(true)}
              handleChoice2={() => setOnline(false)}
            />
            <h2 className="font-bold font-josefin">Earnings</h2>

            <div className="items-center justify-between mt-5 md:flex">
              <Statistics />

              <div className="overflow-hidden ms-0 md:ms-[77px] w-full md:w-1/2">
                <IconWrapper
                  imageUrl="/driver_bg.png"
                  containerStyle="w-[378px] md:w-[567px] h-[247px] md:h-[446px] aspect-square transform -scale-x-100"
                  imageClassname="image"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Driver;
