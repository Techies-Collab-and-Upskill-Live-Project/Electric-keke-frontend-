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
  const { resource: bookId } = useResource(
    () => console.log("book-id"),
    "book-id"
  );

  console.log(bookId);

  const SOCKET = useRef(null);

  useEffect(() => {
    const accessToken = getItemFromLs("accessToken");
    SOCKET.current = new WebSocket(
      `${ws_base_url}/tracking/${bookId}/?token=${accessToken}`
    );

    SOCKET.current.onopen = () =>
      console.log("connected to see the riders location");

    SOCKET.current.onmessage = (event) => {
      const message = PARSEDATA(event.data);
      console.log(message);
      // this is where we deal with the lat and lng to be placed ont
    };

    return () => {
      if (SOCKET.current) SOCKET.current.close();
    };
  }, []);

  return (
    <section className="home-pad pt-5 pb-20">
      <header className="tracking-header">
        <Btn
          icon={<ArrowLeft color="black" />}
          styling="bg-transparent"
          onClick={goBack}
        />
        <LogoPlain />
      </header>

      <h2 className="font-bold text-2xl">{trackTitle[role]}</h2>

      <div className="tracking-info-board">
        <div className="tracking-map border">
          <Map className="size-full" />
        </div>

        {children}
      </div>
    </section>
  );
};

export default TrackLayout;
