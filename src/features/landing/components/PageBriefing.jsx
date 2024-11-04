import Flexibility from "./earn/Flexibility";
import BriefingBox from "./BriefingBox";
import { pages_brief } from "../constants";

const PageBriefing = ({ type = "main" }) => {
  return (
    <section id="about" className="page-brief-container">
      <div className="">
        {type === "earn" && <Flexibility />}

        <BriefingBox {...{ ...pages_brief[type] }} />
      </div>
    </section>
  );
};

export default PageBriefing;
