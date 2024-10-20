import Section from "../layouts/Section";
import { useEffect, useState } from "react";
import Statistics from "../features/booking/components/Statistics";
import dispatchables from "../utils/dispatchables";
import { addItemToLs } from "../utils/ls";
import NewRideModal from "@/features/booking/components/NewRideModal";
import { useModal } from "@/hooks/useModal";
import Choose from "@/components/Choose";
// import { useSocket } from "../../hooks/useSocket";

const Driver = () => {
  // const socket = useSocket();
  const [online, setOnline] = useState(false);
  const {
    isModalOpen: isNewRequest,
    openModal,
    closeModal,
    setIsModalOpen,
  } = useModal();

  useEffect(() => {
    let time_out = setTimeout(() => {
      openModal();
    }, 3000);

    return () => clearTimeout(time_out);
  }, []);

  return (
    <>
      <NewRideModal
        isModalOpen={isNewRequest}
        openModal={openModal}
        closeModal={closeModal}
      />

      <Section darkLogo mobileHeaderStyle="mobile-header">
        <div className="driver-board">
          <p className="text-error text-center text-xs md:text-xl font-semibold">
            To continue receiving cash trips, Kindly pay your outstanding debt
            of 5,000
          </p>
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

            <div className="mt-5 md:flex items-center justify-between">
              <Statistics />

              <div className="overflow-hidden ms-[77px] w-full md:w-1/2">
                <div className="w-[378px] md:w-[567px] h-[247px] md:h-[446px]">
                  <img
                    src="/driver_bg.png"
                    alt="driver"
                    className="transform -scale-x-100 size-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Driver;
