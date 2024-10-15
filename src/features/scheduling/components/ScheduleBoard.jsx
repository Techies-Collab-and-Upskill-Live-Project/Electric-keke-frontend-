import Map from "@/components/Map";
import Choose from "@/components/Choose";
import dispatchables from "@/utils/dispatchables";
import { ScheduleDetail, ScheduleDetailContainer } from "./ScheduleDetail";

const ScheduleBoard = ({ scheduleFormData }) => {
  const { showAlert } = dispatchables();

  return (
    <div className="schedule-dashboard">
      <h3 className="schedule-dashboard-title">Details</h3>

      <div className="px-2 py-5 border border-basic md:flex gap-5 rounded-sm">
        <div className="schedule-location">
          <div className="md:flex items-start justify-between">
            <ScheduleDetailContainer styling="schedule-detail w-[44%]">
              <ScheduleDetail
                title="Your Location"
                text={scheduleFormData.origin}
              />
              <ScheduleDetail
                title="Destination"
                text={scheduleFormData.destination}
              />
            </ScheduleDetailContainer>

            <ScheduleDetailContainer styling="schedule-detail w-[22%]">
              <ScheduleDetail title="Time" text={scheduleFormData.time} />
              <ScheduleDetail
                title="Passengers"
                text={scheduleFormData.quantity}
              />
            </ScheduleDetailContainer>

            <ScheduleDetailContainer styling="schedule-detail w-[24%]">
              <ScheduleDetail title="Date" text={scheduleFormData.date} />
              <ScheduleDetail
                title="Ride Sharing"
                text={scheduleFormData.share}
              />
            </ScheduleDetailContainer>
          </div>

          <Choose
            containerClass="flex items-end gap-4 mt-6"
            choice1txt="Proceed"
            choice2txt="Cancel"
            btnClass="btn w-[181px] h-[4rem]"
            addedClass1="btn--primary"
            addedClass2="btn--secondary"
            handleChoice1={() => showAlert("processing your schedule")}
            handleChoice2={() => showAlert("dropping changes")}
          />
        </div>

        <div className="schedule-map-container">
          <Map className="max-w-full h-[285px]" />
        </div>
      </div>
    </div>
  );
};

export default ScheduleBoard;
