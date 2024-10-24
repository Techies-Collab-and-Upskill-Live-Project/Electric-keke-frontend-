import RegularList from "@/components/_design-patterns/RegularList";
import Board from "./Board";
import { user_dashboard } from "../constants";

const BoardManagement = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6">
      <RegularList
        list={user_dashboard}
        component={Board}
        keyExtractor={user_dashboard.map((item) => item.title)}
      />
    </div>
  );
};

export default BoardManagement;
