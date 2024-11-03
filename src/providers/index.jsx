import { AuthProvider } from "@/contexts/AuthContext";
import ReduxProvider from "./ReduxProvider";
import BrowserRouterProvider from "./BrowserRouterProvider";
import { OnboardingProvider } from "@/features/onboarding/context/OnboardingContext";
import { AdminProvider } from "@/features/admin/context/AdminContext";
import { TransactProvider } from "@/features/transaction/contexts/TransactionContext";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { DriverLocationProvider } from "@/contexts/DriverLocationContext";

const Providers = ({ children }) => {
  return (
    <ReduxProvider>
      <BrowserRouterProvider>
        <AuthProvider>
          <AdminProvider>
            <TransactProvider>
              <OnboardingProvider>
                <DriverLocationProvider>
                  <NotificationProvider>{children}</NotificationProvider>
                </DriverLocationProvider>
              </OnboardingProvider>
            </TransactProvider>
          </AdminProvider>
        </AuthProvider>
      </BrowserRouterProvider>
    </ReduxProvider>
  );
};

export default Providers;
