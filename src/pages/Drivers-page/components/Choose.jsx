import { X, PhoneCall } from "lucide-react";
import { useState } from "react";

const Choose = () => {
    const [closePopup, setClosePopup] = useState(false);

    const handleClose = () => {
        setClosePopup(!closePopup);
    }
  return (
    <div className={`"m-auto absolute top-[50%] left-[50%] bg-white -translate-x-[50%] -translate-y-[50%] px-[30px] py-[15px] rounded-md w-[400px] flex gap-5" ${closePopup ? "hidden" : "flex"}`}>
        <div className="flex flex-col text-center items-center justify-center">
        <div className="flex flex-col text-center items-center justify-center">
            <h1 className="font-bold text-[18px]">Choose Your Preferred Call <br /> Option</h1>
            <p className="text-[11px] text-gray-500 w-[250px]">You can connect the passenger directly through the app or call their phone number</p>
        </div>

        <div className="flex flex-col text-center items-center justify-center mt-[10px] gap-4">
            <div className="flex border border-gray-300 py-[10px] px-[10px] rounded-md gap-4 w-[250px]">
                <PhoneCall className="w-[15px]" />
                <h3 className="text-[15px]">In app call</h3>
            </div>
            <div className="flex border border-gray-300 py-[10px] px-[10px] rounded-md gap-4 w-[250px]">
                <PhoneCall className="w-[15px]" />
                <h3 className="text-[15px]">In app call</h3>
            </div>
        </div>
        </div>
        <X className="bg-gray-300 rounded-full p-[5px] cursor-pointer" onClick={handleClose} />
    </div>
  )
}

export default Choose;

export const handleOpen = () => {
    setClosePopup(!closePopup);
}