import { Outlet } from "react-router-dom";

import SiteFooter from "./SiteFooter";
import SiteNavbar from "./SiteNavbar";

const PublicLayout = () => (
  <div className="app-shell">
    <SiteNavbar />
    <main>
      <Outlet />
    </main>
    <SiteFooter />
  </div>
);

export default PublicLayout;

