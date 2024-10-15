import HeroCta from "./HeroCta";
import HeroImg from "./HeroImg";
import HeroTitle from "./HeroTitle";
import { hero_descriptions, HeroContainerStyling } from "../constants";

const Hero = ({ type = "main" }) => {
  return (
    <div className="hero">
      <div className="hero-board">
        <div
          className={HeroContainerStyling[type]}
        >
          <HeroTitle type={type} />

          {type !== "about" && (
            <div className="mt-6 px-[30px]">
              <p className="hero-description">{hero_descriptions[type]}</p>
              <HeroCta type={type} />
            </div>
          )}
        </div>
      </div>

      <HeroImg type={type} />
    </div>
  );
};

export default Hero;
