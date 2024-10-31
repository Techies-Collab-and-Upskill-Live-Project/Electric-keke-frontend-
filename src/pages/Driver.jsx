import Section from "../layouts/Section";
import { useEffect, useRef, useState } from "react";
import Statistics from "../features/booking/components/Statistics";
import dispatchables from "../utils/dispatchables";
import NewRideModal from "@/features/booking/components/NewRideModal";
import { useModal } from "@/hooks/useModal";
import Choose from "@/components/Choose";
import IconWrapper from "@/components/IconWrapper";
import { useSocket } from "@/hooks/useSocket";
import { getItemFromLs } from "@/utils/ls";
import { PARSEDATA, STRINGIFYDATA } from "@/utils/json";

const ws_base_url = import.meta.env.VITE_WS;

const Driver = () => {
  const SOCKET = useRef(null);

  const { showAlert } = dispatchables();
  const [online, setOnline] = useState(false);
  const {
    isModalOpen: isNewRequest,
    openModal,
    closeModal,
    setIsModalOpen,
  } = useModal();

  useEffect(() => {
    let intervalId;
    const accessToken = getItemFromLs("accessToken");

    
    
    SOCKET.current = new WebSocket(
      `${ws_base_url}/rider/location/?token=${accessToken}`
    );
    
    SOCKET.current.onopen = () =>
      console.log("connected to the rider location websocket");
    
    SOCKET.current.onmessage = (event) => {
      const message = PARSEDATA(event.data);
      console.log(message);
    };
    
    const getPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log(latitude, longitude);
            const driverCoordinates = { latitude, longitude };

            intervalId = setInterval(() => {
              // console.log(driverCoordinates);
              SOCKET.current.send(STRINGIFYDATA(driverCoordinates));
            }, 5000);
          },
          (err) => console.log(err.code)
        );
      } else {
        showAlert("Geolocation not available", "info");
      }
    };

    getPosition();

    return () => {
      if (SOCKET.current) SOCKET.current.close();
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // useEffect(() => {
  //   let time_out = setTimeout(() => {
  //     openModal();
  //   }, 3000);

  //   return () => clearTimeout(time_out);
  // }, []);

  return (
    <>
      <NewRideModal
        isModalOpen={isNewRequest}
        openModal={openModal}
        closeModal={closeModal}
      />

      <Section darkLogo mobileHeaderStyle="mobile-header">
        <div className="driver-board">
          <p className="text-xs font-semibold text-center text-error md:text-xl">
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

            <div className="items-center justify-between mt-5 md:flex">
              <Statistics />

              <div className="overflow-hidden ms-0 md:ms-[77px] w-full md:w-1/2">
                <IconWrapper
                  imageUrl="/driver_bg.png"
                  containerStyle="w-[378px] md:w-[567px] h-[247px] md:h-[446px] aspect-square transform -scale-x-100"
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
