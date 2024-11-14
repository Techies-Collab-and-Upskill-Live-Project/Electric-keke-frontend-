import React from "react";
import NavBar from "./NavBar";
import { LogoPlain } from "@/assets/svg/Logo";
import Btn from "./btn/Btn";
import { HeroSmallInfo } from "./SmallInfo";
import { BellIcon } from "lucide-react";
import { useGlobalNotificationContext } from "@/contexts/NotificationContext";
import { useGlobalAuthContext } from "@/contexts/AuthContext";

const Header = ({ darkLogo, blur, homeHref = "/" }) => {
  const { user } = useGlobalAuthContext();
  const { openNotificationModal } = useGlobalNotificationContext();

  return (
    <header className="header">
      <div className={`header__content ${blur && "header__content--blur"}`}>
        <LogoPlain scale="scale-[1.3]" href={homeHref} />
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

            <HeroSmallInfo
              fullname={user?.fullname}
              id={user?.id}
              photo={user?.avatar}
            />
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
