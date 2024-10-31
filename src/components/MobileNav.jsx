import { useLocation } from "react-router-dom";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { nav_links } from "@/constants";
import Menu from "@/assets/svg/Menu";
import { useDispatch } from "react-redux";
import { LogoPlain } from "@/assets/svg/Logo";
import RegularList from "./_design-patterns/RegularList";
import MobileNavListItem from "./MobileNavListItem";
import IconWrapper from "./IconWrapper";

const MobileNav = ({ blur }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const regex = /driver/i;
  /**w
   * we want to take out the earn nav from the
   * header, is driver present in the url
   */
  const isDriverinTheUrl = regex.test(pathname);

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <IconWrapper
            iconElement={Menu}
            iconElementProps={{
              blur,
              isDriverinTheUrl
            }}
            containerStyle="w-[29px] h-[22px]"
          />
        </SheetTrigger>
        
        <SheetContent side="left" className="border-none bg-white">
          <LogoPlain />

          <SheetClose asChild>
            <nav className="mobile-navigation">
              <RegularList
                list={nav_links}
                component={MobileNavListItem}
                keyExtractor={nav_links.map((item) => item.title)}
              />

              <MobileNavListItem
                href="/onboarding/login"
                title="login"
                onClick={() => {}}
              />
            </nav>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
