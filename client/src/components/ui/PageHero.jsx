import { Helmet } from "react-helmet-async";

const PageHero = ({ title, eyebrow, description, pageTitle, children }) => (
  <>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>
    <section className="section-shell surface-page">
      <div className="container">
        <div className="content-card fade-up">
          <p className="eyebrow mb-3">{eyebrow}</p>
          <h1 className="section-title mb-3">{title}</h1>
          <p className="text-muted-custom fs-5 mb-0 col-lg-8">{description}</p>
          {children ? <div className="mt-4">{children}</div> : null}
        </div>
      </div>
    </section>
  </>
);

export default PageHero;

