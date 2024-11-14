import RegularList from "@/components/_design-patterns/RegularList";
import Board from "./Board";
import { DashboardOverview } from "../services/overview";
import { useResource } from "@/hooks/useResource";
import { icons } from "@/assets";

const BoardManagement = () => {
  const { resource: overviewData, isLoading } = useResource(
    DashboardOverview,
    undefined,
    {}
  );

  const { UsersIcon, DeliveriesIcon, RidesIcon, DisabledIcon } = icons;

  return (
    <div className="overview-dashboard">
      {isLoading ? null : (
        <>
          <Board
            title="Active Users"
            icon={UsersIcon}
            analysisDigit={overviewData.total_active_users}
          />
          
          <Board
            title="Total Rides"
            icon={RidesIcon}
            analysisDigit={overviewData.total_rides}
          />
          
          <Board
            title="Total Deliveries"
            icon={DeliveriesIcon}
            analysisDigit={overviewData.total_deliveries}
          />
          
          <Board
            title="Disabled Users"
            icon={DisabledIcon}
            analysisDigit={overviewData.total_inactive_users}
          />
        </>
      )}
    </div>
  );
};

export default BoardManagement;
