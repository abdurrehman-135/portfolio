import { useGetServicesQuery } from "../../api/portfolioApi";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeader from "../ui/SectionHeader";

const ServicesSection = ({ compact = false }) => {
  const { data: services = [], isLoading, isError } = useGetServicesQuery();

  if (isLoading) {
    return <LoadingSpinner label="Loading services..." />;
  }

  if (isError) {
    return <div className="alert alert-danger mb-0">Services could not be loaded.</div>;
  }

  const visibleServices = compact ? services.slice(0, 4) : services;

  return (
    <section className="section-shell surface-panel" id="services-section">
      <div className="container">
        {!compact ? (
          <SectionHeader
            eyebrow="05 / Services"
            title="Core Expertise"
            description="Editable service cards that can be managed directly from the admin dashboard."
          />
        ) : null}
        <div className="row g-4">
          {visibleServices.map((service) => (
            <div key={service._id} className="col-md-6 col-xl-3">
              <article className="service-card h-100 p-4">
                <div className="d-inline-flex align-items-center justify-content-center rounded-4 surface-card p-3 mb-4">
                  <i className={`bi bi-${service.icon} fs-3 text-primary`} />
                </div>
                <h3 className="h4 fw-bold mb-3">{service.title}</h3>
                <p className="text-muted-custom mb-3">{service.shortDescription}</p>
                <ul className="text-muted-custom ps-3 mb-0">
                  {service.features.map((feature) => (
                    <li key={feature} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

