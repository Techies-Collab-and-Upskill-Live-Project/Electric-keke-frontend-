export const ScheduleDetail = ({ styling, title, text }) => {
  return (
    <div>
      <p className="schedule-detail-title">{title}</p>
      <p className="schedule-text">{text}</p>
    </div>
  );
};

export const ScheduleDetailContainer = ({ styling, ...props }) => {
  return <div className={styling} {...props} />;
};
