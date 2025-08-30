import { Outlet } from "react-router";
import { SideMenu } from "../components/SideMenu";

export function BaseLayout() {
  return (
    <div>
      <SideMenu />
      <Outlet />
    </div>
  );
}
