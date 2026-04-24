import { useGetExperiencesQuery } from "../../api/portfolioApi";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeader from "../ui/SectionHeader";

const ExperienceSection = ({ compact = false }) => {
  const { data: experiences = [], isLoading, isError } = useGetExperiencesQuery();

  if (isLoading) {
    return <LoadingSpinner label="Loading experience..." />;
  }

  if (isError) {
    return <div className="alert alert-danger mb-0">Experience could not be loaded.</div>;
  }

  const visibleItems = compact ? experiences.slice(0, 3) : experiences;

  return (
    <section className="section-shell surface-page" id="experience-section">
      <div className="container">
        {!compact ? (
          <SectionHeader
            eyebrow="04 / Journey"
            title="Project Experience Timeline"
            description="Hands-on campus projects and practical build experience managed through MongoDB-backed resume data."
          />
        ) : null}
        <div className="position-relative">
          <div className="timeline-line d-none d-md-block" />
          <div className="d-grid gap-4">
            {visibleItems.map((item) => (
              <article key={item._id} className="timeline-card position-relative ms-md-4">
                <div className="d-flex flex-column flex-lg-row gap-4">
                  <div className="d-flex align-items-start gap-3 flex-shrink-0">
                    <span className="timeline-marker mt-2" />
                    <div>
                      <p className="eyebrow mb-2">{item.period}</p>
                      <p className="text-soft-custom small text-uppercase mb-0">
                        {item.type}
                      </p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-3">
                      <div>
                        <h3 className="h3 fw-bold mb-1">{item.title}</h3>
                        <p className="text-primary fw-semibold mb-0">
                          {item.organization}
                        </p>
                      </div>
                      <div className="text-soft-custom">{item.location}</div>
                    </div>
                    <p className="text-muted-custom mb-3">{item.summary}</p>
                    <ul className="text-muted-custom mb-0">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="mb-2">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
