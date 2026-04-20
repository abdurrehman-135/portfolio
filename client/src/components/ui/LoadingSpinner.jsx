const LoadingSpinner = ({ label = "Loading content..." }) => (
  <div className="spinner-shell">
    <div className="text-center">
      <div className="spinner-ring mx-auto mb-3" />
      <p className="text-muted-custom mb-0">{label}</p>
    </div>
  </div>
);

export default LoadingSpinner;

