import Heading from "@/components/Heading";
import { earn_requirements } from "../../constants";

const EarnRequirements = () => {
  return (
    <>
      <Heading
        title="Requirements"
        tclass="font-josefin text-[2rem] font-bold"
      />
      <ul className="list-disc pl-10 mt-7">
        {earn_requirements.map((item, index) => (
          <li
            key={index}
            className="text-base md:text-xl lg:text-2xl text-neutral-500"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EarnRequirements;
