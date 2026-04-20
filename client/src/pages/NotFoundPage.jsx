import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFoundPage = () => (
  <>
    <Helmet>
      <title>404 | Abdur Rehman Ansari</title>
    </Helmet>
    <section className="section-shell surface-page">
      <div className="container">
        <div className="content-card text-center py-5">
          <p className="eyebrow mb-3">404</p>
          <h1 className="section-title mb-3">The page you requested does not exist.</h1>
          <p className="text-muted-custom fs-5 mb-4">
            The route may have moved, or the link might be outdated.
          </p>
          <Link className="btn btn-aurora" to="/">
            Return Home
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default NotFoundPage;
