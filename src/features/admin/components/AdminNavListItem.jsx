import { Link } from "react-router-dom";
import { useGlobalAdminContext } from "../context/AdminContext";

const AdminNavListItem = ({ href, title, icon: Icon, ...props }) => {
  const { activeLink } = props;
  const { setCurrentAdminPage, changeContentToDisplay } =
    useGlobalAdminContext();

  const isActive = activeLink === href || (!activeLink && href === "/admin");

  return (
    <Link
      to={href}
      key={title}
      onClick={() => {
        setCurrentAdminPage(title);
        changeContentToDisplay("All");
      }}
    >
      <div className={`admin_nav_link ${isActive && "bg-basic"}`}>
        <Icon color={isActive ? "white" : "black"} />

        <p className={`text-sm font-axiforma ${isActive && "text-white"}`}>
          {title}
        </p>
      </div>
    </Link>
  );
};

export default AdminNavListItem;
