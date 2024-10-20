import SearchBar from "@/components/SearchBar";
import React, { useState } from "react";
import dispatchables from "@/utils/dispatchables";
import Section from "@/layouts/Section";
import { ScheduleBoard, ScheduleForm } from "@/features/scheduling";
import Choose from "@/components/Choose";

const Schedule = () => {
  const [scheduleType, setScheduleType] = useState("ride");

  const { showAlert } = dispatchables();

  const [scheduleFormData, setScheduleFormData] = useState({
    rider: "",
    booking_type: scheduleType,
    origin: "",
    destination: "",
    price: "",
    package_details: "",
    date: "",
    time: "",
    quantity: 0,
    share: "no",
  });

  const handleChange = (e) => {
    setScheduleFormData({
      ...scheduleFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDate = (value) =>
    setScheduleFormData({ ...scheduleFormData, date: value.toDateString() });

  const setTime = (time) => setScheduleFormData({ ...scheduleFormData, time });

  const setQuantity = (quantity) =>
    setScheduleFormData({ ...scheduleFormData, quantity });

  const choseToShareRide = (choice) =>
    setScheduleFormData({ ...scheduleFormData, share: choice });

  return (
    <Section darkLogo={true} mobileHeaderStyle="mobile-header">
      <div className="home-pad pt-20 md:pt-[132px] pb-10">
        <h2 className="schedule-title">Eco Schedule</h2>

        <Choose
          containerClass="w-full flex-center"
          choice1txt="Rides"
          choice2txt="Delivery"
          btnClass="bg-transparent border-b text-neutral-500"
          addedClass1={scheduleType === "ride" && "border-basic"}
          handleChoice1={() => setScheduleType("ride")}
          handleChoice2={() => setScheduleType("delivery")}
        />

        <SearchBar className="hidden w-full max-w-[865px] border-2 mt-8 rounded-[40px] p-1 md:flex items-center justify-between mx-auto" />

        <div className="schedule-tags-container">
          {["Details", "Long distance", "Short Distance", "Rating"].map(
            (item) => {
              return (
                <div key={item} className="schedule-tags">
                  {item}
                </div>
              );
            }
          )}
        </div>

        <ScheduleForm
          scheduleType={scheduleType}
          scheduleFormData={scheduleFormData}
          handleChange={handleChange}
          setTime={setTime}
          setQuantity={setQuantity}
          handleDate={handleDate}
          choseToShareRide={choseToShareRide}
        />

        <ScheduleBoard scheduleFormData={scheduleFormData} />
      </div>
    </Section>
  );
};

export default Schedule;
