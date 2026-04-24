import { useGetProfileQuery, useGetProjectsQuery } from "../../api/portfolioApi";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeader from "../ui/SectionHeader";

const AboutSection = ({ compact = false }) => {
  const { data: profile, isLoading, isError } = useGetProfileQuery();
  const { data: projects = [] } = useGetProjectsQuery();

  if (isLoading) {
    return <LoadingSpinner label="Loading biography..." />;
  }

  if (isError || !profile) {
    return (
      <div className="alert alert-danger mb-0">
        About content could not be loaded from the API.
      </div>
    );
  }

  const projectCount = projects.length || profile.projectCount;
  const experienceLabel =
    Number(profile.yearsExperience) === 1
      ? "Year Project Experience"
      : "Years Project Experience";

  return (
    <section className="section-shell surface-panel" id="about-section">
      <div className="container">
        {!compact ? (
          <SectionHeader
            eyebrow="01 / Biography"
            title="Building the Future, One Line at a Time"
            description="A polished introduction section with profile details fetched from MongoDB-backed content."
          />
        ) : null}
        <div className="row g-4 align-items-center">
          <div className="col-12">
            <div className="content-card h-100">
              <p className="eyebrow mb-3">{profile.title}</p>
              <h3 className="h1 fw-bold mb-3">{profile.name}</h3>
              <p className="text-muted-custom fs-5 mb-4">{profile.about}</p>
              <div className="row g-3 mb-4">
                <div className="col-sm-6 col-xl-3">
                  <div className="surface-card rounded-4 p-3 h-100">
                    <div className="stat-number">{profile.yearsExperience}+</div>
                    <div className="text-soft-custom text-uppercase small">
                      {experienceLabel}
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="surface-card rounded-4 p-3 h-100">
                    <div className="stat-number">{projectCount}+</div>
                    <div className="text-soft-custom text-uppercase small">
                      Projects
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="surface-card rounded-4 p-3 h-100">
                    <div className="h4 fw-bold text-primary mb-1">
                      {profile.educationLabel}
                    </div>
                    <div className="text-soft-custom text-uppercase small">Education</div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="surface-card rounded-4 p-3 h-100">
                    <div className="h4 fw-bold text-primary mb-1">{profile.location}</div>
                    <div className="text-soft-custom text-uppercase small">Location</div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span key={interest} className="chip">
                    <span className="chip-dot" />
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
