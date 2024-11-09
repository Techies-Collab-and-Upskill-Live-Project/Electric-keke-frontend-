import { Heading, ProfilePhoto } from "@/components";
import { addItemToLs } from "@/utils/ls";
import React from "react";
import { useNavigate } from "react-router-dom";

const SupportTicket = ({
  id,
  user_fullname,
  user_avatar_url,
  assigned_admin,
  created_at,
  status,
  username = "Customer name",
  complain = "Hello admin, something happen oo",
  first_message,
}) => {
  const navigate = useNavigate();
  
  const start = created_at.indexOf("T") + 1;
  const time = created_at
    .slice(start, start + 5)
    .split(":")
    .map((item) => Number(item));

  return (
    <div
      className="px-5 py-8 border-b border-basic-200 h-[147px] flex-center cursor-pointer"
      onClick={() => {
        addItemToLs("ticket", id);
        navigate('/customer-care')
      }}
    >
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center gap-x-[30px]">
          <ProfilePhoto
            sharedStyle="size-[45px] rounded-full complain__shadow"
            imageUrl={user_avatar_url}
            noImageContainerStyle="bg-basic flex-center"
            textStyle="text-white font-bold text-2xl"
            text={user_fullname[0]}
          />

          <Heading
            title={user_fullname}
            description={first_message?.message}
            tclass="font-semibold"
            dclass="text-sm mt-3 line-clamp-1"
          />
        </div>

        <p className="self-end text-sm">
          {time[0]}:{time[1]}
          {time[0] > 12 ? "pm" : "am"}
        </p>
      </div>
    </div>
  );
};

export default SupportTicket;
