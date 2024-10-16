import { AuthProvider } from "@/contexts/AuthContext";
import ReduxProvider from "./ReduxProvider";
import BrowserRouterProvider from "./BrowserRouterProvider";

const Providers = ({ children }) => {
  return (
    <ReduxProvider>
      <BrowserRouterProvider>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouterProvider>
    </ReduxProvider>
  );
};

export default Providers;
