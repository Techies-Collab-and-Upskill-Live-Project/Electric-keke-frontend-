import MobileNav from "./MobileNav";
import { Link, useLocation } from "react-router-dom";
import Bell from "@/assets/svg/Bell";
import { LogoPlain, LogoWithText } from "@/assets/svg/Logo";
import Btn from "./btn/Btn";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { HeroSmallInfo } from "./SmallInfo";
import { BellIcon, SearchIcon } from "lucide-react";
import { useGlobalNotificationContext } from "@/contexts/NotificationContext";

const MobileHeader = ({ blur, mobileHeaderStyle }) => {
  const user = useCurrentUser();
  const { pathname } = useLocation();
  const { openNotificationModal } = useGlobalNotificationContext();

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

              <HeroSmallInfo fullname={user?.fullname} id={user?.id} />
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
        <Btn text="Search" icon={<SearchIcon size={14} />} />
      )}
    </header>
  );
};

export default MobileHeader;
