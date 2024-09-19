import PriceDetails from "../components/PriceDetails";
import NavigationBar from "../components/Header/NavigationBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="w-[839px] h-[789px] m-auto">
      <PriceDetails />
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
