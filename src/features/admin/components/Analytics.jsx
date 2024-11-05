// import PieChart from "../shared/PieChart";
import Experimental from "../../../components/Experimental";

const Analytics = () => {
  return (
    <div className="mt-8 md:flex items-stretch gap-x-7">
      <div className="w-full md:w-7/12 max-w-[772px] border-2 p-5 min-h-[371px]">
        <p className="text-xl font-medium">Analytics</p>
      </div>

      <Experimental
        data={{
          riders: { color: "transparent", cut: 20 },
          jose: { color: "blue", cut: 10 },
          user: { color: "indigo", cut: 20 },
          passengers: { color: "orange", cut: 30 },
          emem: { color: "green", cut: 20 },
        }}
      />
    </div>
  );
};

export default Analytics;
