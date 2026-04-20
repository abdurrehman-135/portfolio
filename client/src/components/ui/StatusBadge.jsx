const statusClassMap = {
  Live: "status-live",
  "In Review": "status-review",
  Draft: "status-draft",
  new: "status-new",
  read: "status-read",
  replied: "status-replied",
};

const StatusBadge = ({ value }) => (
  <span className={`status-badge ${statusClassMap[value] || "status-draft"}`}>
    {value}
  </span>
);

export default StatusBadge;

