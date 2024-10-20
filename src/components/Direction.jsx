import { ArrowLeft, ArrowRight } from "lucide-react";
import Choose from "./Choose";

const Direction = ({ handleClick }) => {
  return (
    <Choose
      containerClass="direction"
      icon1={<ArrowLeft color="black" />}
      icon2={<ArrowRight color="black" />}
      btnClass="direction-btn p-0"
      handleChoice1={() => handleClick("decrement")}
      handleChoice2={() => handleClick("increment")}
    />
  );
};

export default Direction;
