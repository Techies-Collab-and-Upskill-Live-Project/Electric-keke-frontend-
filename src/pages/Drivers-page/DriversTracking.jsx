import { Susan, DriversMap } from "../../assets";
import { MessagesSquare, Phone, Battery, LandPlot, Timer } from "lucide-react";
import Section from "../../shared-pages/Section";
import Button from "./components/Button";
import Choose from "./components/Choose";
import {useState} from "react";

const DriversTracking = () => {
  const [openPopup, setOpenPopup] = useState(false);

    const handleOpen = () => {
        setOpenPopup(!openPopup);
    }
  return (
    <section className="px-[50px] relative backdrop-blur-xl">
      <div className="flex gap-2 justify-center mt-[30px] w-full">
        <Choose className={`flex`} />
      <div className="">
      <h1 className="font-bold text-[18px]">Locate passenger</h1>
      <div className="flex gap-3">
        <div className="flex flex-col">
          <img src={DriversMap} className="h-[650px]" />
        </div>

        <div className="flex flex-col gap-[40px]">

          <div className="flex gap-10 bg-[#E8F4E8] py-[9px] px-[15px] items-center">
          <img src={Susan} className="w-[80px]" />
          <h1 className="text-[18px] font-bold">Susan Micheal</h1>
          <div className="flex gap-2">
          <MessagesSquare className="text-[#77BB77]"  />
          <Phone className="text-[#77BB77]" />
          </div>
          </div>

          <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex gap-3">
                <div className="flex flex-col">
                <Battery className="bg-[#77BB77] rounded-md w-[25px] text-white px-[5px]" />
                </div>
                <div className="flex flex-col">
                <h1 className="font-bold text-[13px]">Battery level</h1>
                <p className="text-[10px] text-gray-500">76%</p>
                </div>
              </div>
              <span className="h-[25px] w-0 p-[1px] bg-[#77BB77] my-[5px] mx-[10px] decoration-dotted"></span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex gap-3">
                <div className="flex flex-col">
                <LandPlot className="bg-[#77BB77] rounded-md w-[25px] text-white px-[5px]" />
                </div>
                <div className="flex flex-col">
                <h1 className="font-bold text-[13px]">Distance to pick up location</h1>
                <p className="text-[10px] text-gray-500">12km</p>
                </div>
              </div>
              <span className="h-[25px] w-0 p-[1px] bg-[#77BB77] my-[5px] mx-[10px] decoration-dotted"></span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex gap-3">
                <div className="flex flex-col">
                <Timer className="bg-[#77BB77] rounded-md w-[25px] text-white px-[5px]" />
                </div>
                <div className="flex flex-col">
                <h1 className="font-bold text-[13px]">Estimated time</h1>
                <p className="text-[10px] text-gray-500">30 mins</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
          <div className="flex shadow-2xl bg-white py-[20px] w-full px-[20px] rounded-md">
            <h1 className="text-[12px]">12, Olayiwola close ikeja</h1>
          </div>
          <div className="flex shadow-2xl bg-white py-[15px] w-full px-[20px] rounded-md">
            <h1 className="text-[12px]">12, Olayiwola close ikeja</h1>
          </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Button styles="font-bold rounded-md bg-[#E8F4E8]" title={"N3000"} />
          <Button styles="bg-[#77BB77] font-sm text-white bg-[#77BB77] rounded-full" title={"Start trip"} onClick={handleOpen} />
        </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default DriversTracking;