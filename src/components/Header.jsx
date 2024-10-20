import React, { useState } from "react";
import NavBar from "./NavBar";
import { LogoPlain } from "@/assets/svg/Logo";
import Btn from "./btn/Btn";
import { HeroSmallInfo } from "./SmallInfo";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import NotificationModal from "./modals/NotificationModal";
import { BellIcon } from "lucide-react";
import { useGlobalNotificationContext } from "@/contexts/NotificationContext";

const Header = ({ darkLogo, blur }) => {
  const user = useCurrentUser();
  const { openNotificationModal } = useGlobalNotificationContext();

  return (
    <header className="header">
      <div className={`header__content ${blur && "header__content--blur"}`}>
        <LogoPlain />
        <NavBar dark={darkLogo} />

        {user ? (
          <div className="header__profile-nav-board">
            <Btn
              icon={
                <>
                  <span className="indicator" />
                  <BellIcon size={40} color={blur ? "#FAFAFA" : "black"} />
                </>
              }
              styling="header__icon bg-transparent p-0"
              onClick={openNotificationModal}
            />

            <HeroSmallInfo fullname={user?.fullname} id={user?.id} />
          </div>
        ) : (
          <Btn
            text="Sign Up"
            href="/onboarding"
            linkBtnWidth="w-[15%]"
            styling="btn--hero btn--primary"
          />
        )}
      </div>
    </header>
  );
};

export default Header;
