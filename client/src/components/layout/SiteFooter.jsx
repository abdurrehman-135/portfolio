import { Link } from "react-router-dom";

import { useGetProfileQuery } from "../../api/portfolioApi";

const SiteFooter = () => {
  const { data: profile } = useGetProfileQuery();

  return (
    <footer className="footer-shell py-5">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <p className="eyebrow mb-3">Built with precision</p>
            <h3 className="h2 fw-bold mb-3">
              Ready for future customization and real portfolio content updates.
            </h3>
            <p className="text-muted-custom mb-0">
              Replace placeholder copy, imagery, and links anytime through the admin
              dashboard or seed data.
            </p>
          </div>
          <div className="col-lg-6">
            <div className="d-flex flex-wrap justify-content-lg-end gap-3 mb-3">
              <a href={profile?.githubUrl || "#"} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={profile?.linkedinUrl || "#"} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={profile?.twitterUrl || "#"} target="_blank" rel="noreferrer">
                Twitter
              </a>
              <Link to="/contact">Email</Link>
            </div>
            <p className="text-muted-custom mb-0 text-lg-end">
              © {new Date().getFullYear()} {profile?.name || "Abdur Rehman Ansari"}.
              Built with React, Redux Toolkit, Express, and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

