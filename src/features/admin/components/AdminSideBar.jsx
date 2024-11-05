import React from "react";
import AdminNav from "./AdminNav";
import { Link, useNavigate } from "react-router-dom";
import SettingAdmin from "@/features/admin/assets/svgs/SettingAdmin";
import dispatchables from "@/utils/dispatchables";
import LogoutIcon from "@/assets/svg/logout-icon";
import Btn from "../../../components/btn/Btn";
import { Logout } from "@/services/Logout";
import { sideBarMargin } from "../constants";
import { useGlobalAdminContext } from "../context/AdminContext";

const AdminSideBar = ({ currentAdminPage }) => {
  const {showSidebar} = useGlobalAdminContext();
  const navigate = useNavigate();
  const { showAlert } = dispatchables();

  const LogoutUser = () => {
    Logout();
    showAlert("Logged Out");
    navigate("/");
  };

  // ${sideBarMargin[currentAdminPage]}
  
  return (
    <div className={`admin-sidebar ${showSidebar ? null : 'hide-bar'}`}>
      <div className="h-full w-full px-10 flex flex-col">
        <AdminNav />

        <div className="admin-footer">
          <Link className="admin-footer-item">
            <div>
              <SettingAdmin color="black" />
            </div>
            <p className="">Help Center</p>
          </Link>

          <Btn
            icon={<LogoutIcon />}
            text="Logout"
            onClick={LogoutUser}
            styling="admin-footer-item justify-start bg-transparent text-error-200 font-bold p-20"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSideBar;
