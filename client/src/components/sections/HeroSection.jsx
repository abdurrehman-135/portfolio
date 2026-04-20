import { Link } from "react-router-dom";

import { useGetProfileQuery } from "../../api/portfolioApi";
import LoadingSpinner from "../ui/LoadingSpinner";

const HeroSection = () => {
  const { data: profile, isLoading, isError } = useGetProfileQuery();

  if (isLoading) {
    return <LoadingSpinner label="Loading hero content..." />;
  }

  if (isError || !profile) {
    return (
      <section className="section-shell surface-page">
        <div className="container">
          <div className="alert alert-danger mb-0">
            Hero content could not be loaded from the API.
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-shell surface-page position-relative overflow-hidden">
      <div className="hero-orb hero-orb-primary" />
      <div className="hero-orb hero-orb-secondary" />
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-xl-9 text-center fade-up">
            <div className="availability-pill mb-4">
              <span className="chip-dot" />
              {profile.availability}
            </div>
            <p className="eyebrow mb-3">{profile.name}</p>
            <h1 className="hero-title mb-4">
              {profile.title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="gradient-text">
                {profile.title.split(" ").slice(-1).join(" ")}
              </span>
            </h1>
            <p className="text-muted-custom fs-5 col-lg-8 mx-auto mb-5">
              {profile.intro}
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <Link className="btn btn-aurora" to="/projects">
                View Projects
              </Link>
              <Link className="btn btn-ghost-light" to="/contact">
                Contact Me
              </Link>
              <a
                className="btn btn-panel"
                href={profile.resumeUrl || "#"}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

