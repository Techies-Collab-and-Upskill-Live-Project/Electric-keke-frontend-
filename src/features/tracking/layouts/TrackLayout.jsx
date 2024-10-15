import { LogoPlain } from "@/assets/svg/Logo";
import Btn from "@/components/btn/Btn";
import { goBack } from "@/utils/goBack";
import { ArrowLeft } from "lucide-react";
import { trackTitle } from "../constants";
import Map from "@/components/Map";

const TrackLayout = ({ role, children }) => {
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
