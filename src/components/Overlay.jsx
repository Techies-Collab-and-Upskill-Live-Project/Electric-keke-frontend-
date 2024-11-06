import { LogoPlain } from "@/assets/svg/Logo";

const Overlay = ({ className, logo = true, children }) => {
  return (
    <div className={className}>
      {logo && (
        <LogoPlain
          styling="size-[94px] rounded-full flex-center bg-white"
          logoClass=""
        />
      )}
      {children && children}
    </div>
  );
};

export default Overlay;
