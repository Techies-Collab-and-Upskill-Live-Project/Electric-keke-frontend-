import { LogoPlain } from "@/assets/svg/Logo";
import Btn from "@/components/btn/Btn";
import { goBack } from "@/utils/goBack";
import { ArrowLeft } from "lucide-react";
import { trackTitle } from "../constants";
import Map from "@/components/Map";
import { useEffect, useRef } from "react";
import { getItemFromLs } from "@/utils/ls";
import { useResource } from "@/hooks/useResource";
import { PARSEDATA } from "@/utils/json";

const ws_base_url = import.meta.env.VITE_WS;

const TrackLayout = ({ role, children }) => {
  const {
    resource: { booking_id },
  } = useResource(() => console.log("bookData"), "bookData");

  // console.log(booking_id);

  const SOCKET = useRef(null);

  useEffect(() => {
    if (role !== "User") return;
    const accessToken = getItemFromLs("accessToken");
    SOCKET.current = new WebSocket(
      `${ws_base_url}/tracking/${booking_id}/?token=${accessToken}`
    );

    SOCKET.current.onopen = () =>
      console.log("connected to see the riders location");

    SOCKET.current.onmessage = (event) => {
      const message = PARSEDATA(event.data);
      // console.log(message);
      // this is where we deal with the lat and lng to be placed ont
    };

    return () => {
      if (SOCKET.current) SOCKET.current.close();
    };
  }, []);

  return (
    <section className="pt-5 pb-20 home-pad">
      <header className="tracking-header">
        <Btn
          icon={<ArrowLeft color="black" />}
          styling="bg-transparent p-0"
          onClick={goBack}
        />
        <LogoPlain />
      </header>

      <h2 className="text-2xl font-bold">{trackTitle[role]}</h2>

      <div className="tracking-info-board">
        <div className="border tracking-map">
          <Map className="size-full" />
        </div>

        {children}
      </div>
    </section>
  );
};

export default TrackLayout;
