const AdminSidebar = ({ activeSection, onChange, onLogout, user }) => {
  const links = [
    { key: "overview", label: "Dashboard", icon: "grid-1x2-fill" },
    { key: "profile", label: "Profile", icon: "person-badge" },
    { key: "projects", label: "Manage Projects", icon: "folder2-open" },
    { key: "skills", label: "Skills", icon: "lightning-charge" },
    { key: "experience", label: "Experience", icon: "clock-history" },
    { key: "services", label: "Services", icon: "briefcase" },
    { key: "messages", label: "Messages", icon: "envelope-open" },
  ];

  return (
    <aside className="admin-sidebar p-4 d-flex flex-column gap-4">
      <div>
        <p className="mb-2 text-primary fw-bold fs-3">Admin Panel</p>
        <p className="eyebrow mb-0">Portfolio Manager</p>
      </div>

      <nav className="d-grid gap-2">
        {links.map((link) => (
          <button
            key={link.key}
            className={`side-link border-0 text-start ${
              activeSection === link.key ? "active" : ""
            }`}
            type="button"
            onClick={() => onChange(link.key)}
          >
            <i className={`bi bi-${link.icon}`} />
            {link.label}
          </button>
        ))}
      </nav>

      <div className="mt-auto">
        <div className="surface-card rounded-4 p-3 mb-3">
          <div className="d-flex align-items-center gap-3">
            <div className="rounded-circle bg-primary text-dark d-inline-flex align-items-center justify-content-center p-3">
              <i className="bi bi-person-fill" />
            </div>
            <div>
              <div className="fw-bold">{user?.name || "Admin"}</div>
              <div className="text-soft-custom small text-uppercase">{user?.role}</div>
            </div>
          </div>
        </div>
        <button className="btn btn-panel w-100" type="button" onClick={onLogout}>
          <i className="bi bi-box-arrow-right me-2" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
