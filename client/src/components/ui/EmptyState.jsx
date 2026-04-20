const EmptyState = ({ title, description }) => (
  <div className="empty-state">
    <h3 className="h5 fw-bold mb-2">{title}</h3>
    <p className="text-muted-custom mb-0">{description}</p>
  </div>
);

export default EmptyState;
