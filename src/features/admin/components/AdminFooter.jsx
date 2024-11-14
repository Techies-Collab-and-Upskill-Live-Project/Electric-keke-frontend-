import LogoutIcon from '@/assets/svg/logout-icon'
import { Btn } from '@/components'
import { SettingsIcon } from 'lucide-react'
import React from 'react'
import { Logout } from "@/services/Logout";
import { useNavigate } from 'react-router-dom';
import dispatchables from '@/utils/dispatchables';

const AdminFooter = () => {
  const navigate = useNavigate();
  const { showAlert } = dispatchables();

  const LogoutUser = () => {
    Logout();
    showAlert("Logged Out");
    navigate("/");
  };
  
  return (
    <div className="admin-footer">
          <Btn
            icon={<SettingsIcon />}
            text="Help Center"
            href=""
            // linkBtnWidth="admin_nav_link"
            styling="bg-transparent text-black justify-start admin_nav_link"
          />

          <Btn
            icon={<LogoutIcon />}
            text="Logout"
            onClick={LogoutUser}
            styling="admin_nav_link bg-transparent justify-start text-error-200 font-bold"
          />
        </div>
  )
}

export default AdminFooter