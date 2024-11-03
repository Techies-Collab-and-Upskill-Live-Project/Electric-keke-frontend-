import { LogoPlain } from "@/assets/svg/Logo";

const Overlay = ({ className, logo = true }) => {
  return (
    <div className={className}>
      {logo && (
        <LogoPlain
          styling="size-[94px] rounded-full flex-center bg-white"
          logoClass=""
        />
      )}
    </div>
  );
};

export default Overlay;
