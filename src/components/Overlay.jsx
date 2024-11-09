import { LogoPlain } from "@/assets/svg/Logo";

const Overlay = ({
  className,
  logo = true,
  logoStyle = "size-[94px] rounded-full flex-center bg-white",
  logoImageStyle,
  children,
}) => {
  return (
    <div className={className}>
      {logo && <LogoPlain styling={logoStyle} logoClass={logoImageStyle} />}
      {children && children}
    </div>
  );
};

export default Overlay;
