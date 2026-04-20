import StatusBadge from "../ui/StatusBadge";

const OverviewPanel = ({ projects, skills, experiences, services, messages }) => {
  const recentMessages = messages.slice(0, 3);
  const stats = [
    {
      label: "Total Projects",
      value: projects.length,
      note: `${projects.filter((project) => project.featured).length} featured`,
      icon: "folder",
    },
    {
      label: "Tech Skills",
      value: skills.length,
      note: "Across frontend, backend, database, and tools",
      icon: "lightning-charge",
    },
    {
      label: "Resume Items",
      value: experiences.length,
      note: "Experience, education, and certifications",
      icon: "journal-code",
    },
    {
      label: "New Messages",
      value: messages.filter((message) => message.status === "new").length,
      note: `${messages.length} total inquiries stored`,
      icon: "envelope",
    },
  ];

  return (
    <div className="d-grid gap-4">
      <div className="row g-4">
        {stats.map((stat) => (
          <div key={stat.label} className="col-md-6 col-xl-3">
            <div className="metric-card h-100">
              <div className="d-flex justify-content-between align-items-start mb-4">
                <div>
                  <p className="text-soft-custom text-uppercase small mb-2">{stat.label}</p>
                  <div className="stat-number">{stat.value}</div>
                </div>
                <i className={`bi bi-${stat.icon} fs-1 text-soft-custom`} />
              </div>
              <div className="metric-note">{stat.note}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="row g-4">
        <div className="col-xl-7">
          <div className="dashboard-panel h-100">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <p className="eyebrow mb-2">Project Snapshot</p>
                <h3 className="h3 fw-bold mb-0">Recently managed work</h3>
              </div>
            </div>
            <div className="table-responsive admin-table-shell rounded-4 overflow-hidden">
              <table className="table admin-table align-middle">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Stack</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.slice(0, 4).map((project) => (
                    <tr key={project._id}>
                      <td>
                        <div className="fw-bold">{project.title}</div>
                        <div className="text-soft-custom small">
                          {project.featured ? "Featured project" : "Portfolio entry"}
                        </div>
                      </td>
                      <td>{project.category}</td>
                      <td>
                        <StatusBadge value={project.status} />
                      </td>
                      <td className="text-muted-custom small">
                        {project.technologies.slice(0, 3).join(", ")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-xl-5">
          <div className="dashboard-panel h-100">
            <p className="eyebrow mb-2">Recent Inquiries</p>
            <h3 className="h3 fw-bold mb-4">Inbox preview</h3>
            <div className="d-grid gap-3">
              {recentMessages.map((message) => (
                <article key={message._id} className="surface-card rounded-4 p-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <StatusBadge value={message.status} />
                    <span className="text-soft-custom small">
                      {new Date(message.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <h4 className="h5 fw-bold mb-1">{message.name}</h4>
                  <p className="text-soft-custom small text-uppercase mb-2">
                    {message.email}
                  </p>
                  <p className="text-muted-custom mb-0">{message.subject}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPanel;

