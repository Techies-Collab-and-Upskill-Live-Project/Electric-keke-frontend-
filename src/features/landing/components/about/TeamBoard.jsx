import RegularList from "@/components/_design-patterns/RegularList";
import TeamMember from "./TeamMember";
import { team_members } from "../../constants";

const TeamBoard = () => {
  return (
    <div className="team-board">
      <RegularList
        list={team_members}
        component={TeamMember}
        keyExtractor={team_members.map((teamMember) => teamMember.name)}
      />
    </div>
  );
};

export default TeamBoard;
