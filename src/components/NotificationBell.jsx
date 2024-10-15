const NotificationBell = ({ styling, icon }) => {
  return (
    <div className="header__icon">
      <span className="indicator" />
      {icon}
    </div>
  );
};

export default NotificationBell;
