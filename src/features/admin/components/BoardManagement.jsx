import RegularList from "@/components/_design-patterns/RegularList";
import Board from "./Board";
import { DashboardOverview } from "../services/overview";
import { useResource } from "@/hooks/useResource";
import { icons } from "@/assets";

const BoardManagement = () => {
  const {
    resource: {
      total_active_users,
      total_rides,
      total_deliveries,
      total_inactive_users,
    },
    isLoading,
  } = useResource(DashboardOverview, undefined, {
    total_active_users: 0,
    total_rides: 0,
    total_deliveries: 0,
    total_inactive_users: 0,
  });

  const { UsersIcon, DeliveriesIcon, RidesIcon, DisabledIcon } = icons;

  return (
    <div className="overview-dashboard">
      {isLoading ? null : (
        <>
          <Board
            title="Active Users"
            icon={UsersIcon}
            analysisDigit={total_active_users}
          />
          <Board
            title="Total Rides"
            icon={RidesIcon}
            analysisDigit={total_rides}
          />
          <Board
            title="Total Deliveries"
            icon={DeliveriesIcon}
            analysisDigit={total_deliveries}
          />
          <Board
            title="Disabled Users"
            icon={DisabledIcon}
            analysisDigit={total_inactive_users}
          />
        </>
      )}
    </div>
  );
};

export default BoardManagement;
