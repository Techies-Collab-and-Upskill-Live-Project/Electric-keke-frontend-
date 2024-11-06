import MobileNav from "./MobileNav";
import { useLocation } from "react-router-dom";
import { LogoPlain, LogoWithText } from "@/assets/svg/Logo";
import Btn from "./btn/Btn";
import { HeroSmallInfo } from "./SmallInfo";
import { BellIcon } from "lucide-react";
import { useGlobalNotificationContext } from "@/contexts/NotificationContext";
import { useGlobalAuthContext } from "@/contexts/AuthContext";

const MobileHeader = ({ blur, mobileHeaderStyle }) => {
  const { pathname } = useLocation();
  const { openNotificationModal } = useGlobalNotificationContext();
  const {user} = useGlobalAuthContext();

  return (
    <header className={mobileHeaderStyle}>
      {pathname !== "/schedule-ride" && <MobileNav blur={blur} />}

      {pathname === "/schedule-ride" && (
        <h2 className="mobile-header__title">Eco Schedule</h2>
      )}

      {pathname === "/settings" ? <LogoWithText /> : <LogoPlain />}

      {pathname !== "/schedule-ride" && (
        <>
          {user ? (
            <div className="header__profile-nav-board">
              <Btn
                icon={
                  <>
                    <span className="indicator" />
                    <BellIcon size={24} color={blur ? "#FAFAFA" : "black"} />
                  </>
                }
                styling="header__icon bg-transparent p-0"
                onClick={openNotificationModal}
              />

              <HeroSmallInfo fullname={user?.fullname} id={user?.id} photo={user?.avatar} />
            </div>
          ) : (
            <Btn
              href="/onboarding"
              text="Sign Up"
              styling="btn--hero btn--primary w-[134px]"
            />
          )}
        </>
      )}

      {pathname === "/schedule-ride" && (
        // <Btn text="Search" icon={<SearchIcon size={14} />} />
        <span />
      )}
    </header>
  );
};

export default MobileHeader;
