import IconWrapper from "@/components/IconWrapper";
import CountUp from "react-countup";

const Board = ({ title, icon, analysisDigit = "20", percent = "20" }) => {
  return (
    <div className="single-board">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-silver">{title}</p>
        
        <IconWrapper
          iconElement={icon}
          containerStyle="size-10 rounded-full flex-center bg-neutral board-icon__shadow"
        />
      </div>

      <div className="mt-6">
        <h2 className="text-[2rem] font-extrabold">
          <CountUp end={analysisDigit} start={0} duration={5} />
        </h2>
        <p className="text-xs">
          <span className="text-basic">+{percent}%</span> from last month
        </p>
      </div>
    </div>
  );
};

export default Board;
