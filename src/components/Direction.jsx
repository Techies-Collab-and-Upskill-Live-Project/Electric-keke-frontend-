import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import Choose from "./Choose";

const Direction = ({ handleClick }) => {
  return (
    <Choose
      containerClass="direction"
      btnClass="bg-transparent p-0"
      icon1={<ArrowLeftCircleIcon color="black" size={37} />}
      icon2={<ArrowRightCircleIcon color="black" size={37} />}
      handleChoice1={() => handleClick("decrement")}
      handleChoice2={() => handleClick("increment")}
    />
  );
};

export default Direction;
