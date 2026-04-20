import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { useGetProfileQuery } from "../../api/portfolioApi";
import ThemeToggle from "../ui/ThemeToggle";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Resume", to: "/resume" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

const SiteNavbar = () => {
  const [open, setOpen] = useState(false);
  const { data: profile } = useGetProfileQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });

  return (
    <header className="navbar-shell surface-glass">
      <div className="container py-3">
        <div className="d-flex align-items-center justify-content-between gap-3">
          <Link className="fw-bold fs-5 tracking-tight" to="/">
            {profile?.name || "Abdur Rehman Ansari"}
          </Link>

          <button
            className="btn btn-panel d-lg-none"
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
          </button>

          <div className="d-none d-lg-flex align-items-center gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link-custom ${isActive ? "active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="d-none d-lg-flex align-items-center gap-3">
            <ThemeToggle />
            <Link className="btn btn-ghost-light" to="/admin/login">
              Admin Login
            </Link>
          </div>
        </div>

        {open ? (
          <div className="d-lg-none mt-3 surface-card rounded-4 p-3">
            <div className="d-grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link-custom ${isActive ? "active" : ""}`
                  }
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <ThemeToggle />
              <Link className="btn btn-ghost-light" to="/admin/login">
                Admin Login
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default SiteNavbar;

