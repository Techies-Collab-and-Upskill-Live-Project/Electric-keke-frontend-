import Heading from "@/components/Heading";
import TeamBoard from "./TeamBoard";

const Meet = () => {
  return (
    <section id="meet">
      <div className="w-full">
        <Heading
          title="Meet The Team"
          tclass="page-brief__title title-dark text-center"
          type="about"
        />
        <TeamBoard />
      </div>
    </section>
  );
};

export default Meet;
