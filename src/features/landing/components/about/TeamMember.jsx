import React from "react";

const TeamMember = ({ photo, name, location, role }) => {
  return (
    <div className="team-member">
      <div className="w-full h-[170px]">
        <img src={photo} alt={name} className="image rounded-ml" />
      </div>

      <div className="team-member__details">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-xs text-neutral-500">{location}</p>
        <p className="text-xs text-basic">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
