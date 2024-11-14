import Heading from "@/components/Heading";

const Arrived = ({origin, destination}) => {
  return (
    <div className="mt-8">
      <Heading
        title="You've Arrived"
        tclass="font-josefin font-bold text-2xl md:text-[2rem]"
        description="You've reached the drop off location"
        dclass="text-sm mt-3 text-neutral-500"
      />

      <div className="mt-6 mb-8 h-[200px] md:min-h-[262px] flex gap-x-[10px]">
        
        <div className="flex flex-col justify-between flex-1 py-7">
          <div className="size-[14px] rounded-full bg-white border-[3px] border-basic" />

          <div className="size-[14px] rounded-full bg-white border-[3px] border-basic" />
        </div>

        <div className="flex flex-col justify-between w-[100%]">
          <div className="flex items-center">
            <div className="px-5 w-fit">
              <p>Pick Up</p>
            </div>

            <div className="flex-1 ride__location">
              <p className="text-eiteen">{origin}</p>
            </div>
          </div>

          <div className="flex items-center">
            <div className="px-5 w-fit">
              <p>Drop Off</p>
            </div>
            
            <div className="flex-1 ride__location">
              <p className="text-eiteen">{destination}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrived;
