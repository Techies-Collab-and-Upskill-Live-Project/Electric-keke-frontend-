import ArrDown from "@/assets/svg/ArrDown";
import { Link } from "react-router-dom";

export const SmallInfo = ({
  admin,
  fullname,
  email,
  photoConStyle,
  photo,
  styling,
  nameBoxStyling,
  fullnameStyle,
  nickStyle,
  show_nick,
  show_arr,
  id
}) => {
  return (
    <div className={`p-1 rounded-[40px] ${styling}`}>
      <div className="flex items-center gap-2">
        <Link to={`/profile/${id}`}>
          <div className={`rounded-full ${photoConStyle || "size-9"}`}>
            <img
              src={photo || "/persons/rider1.png"}
              alt={fullname || null}
              className="size-full rounded-full"
            />
          </div>
        </Link>

        <div className={nameBoxStyling}>
          <p className={`font-bold line-clamp-1 ${fullnameStyle}`}>
            {fullname}
          </p>
          {show_nick && (
            <p className={nickStyle}>{admin ? "Admin" : `@${email || "susu"}`}</p>
          )}
        </div>
      </div>

      {show_arr && (
        <div>
          <ArrDown />
        </div>
      )}
    </div>
  );
};

export const HeroSmallInfo = (props) => {
  return (
    <SmallInfo
      {...props}
      styling="w-fit laptop:w-[144px] border-0 laptop:border-2 border-neutral"
      photoConStyle="size-6 md:size-10"
      fullnameStyle="text-white"
      nameBoxStyling="hidden laptop:block"
      show_arr={false}
      show_nick={false}
    />
  );
};
