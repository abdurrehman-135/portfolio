import { useGetSkillsQuery } from "../../api/portfolioApi";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeader from "../ui/SectionHeader";

const categoryCopy = {
  Frontend: "Component-driven UI, responsive layouts, and interactive client experiences.",
  Backend: "Reliable APIs, business logic, and authentication for production applications.",
  Database: "Schema design, query modeling, and data flows for content-rich products.",
  Tools: "Delivery tooling, collaboration systems, and developer experience workflows.",
};

const SkillsSection = ({ compact = false }) => {
  const { data: skills = [], isLoading, isError } = useGetSkillsQuery();

  if (isLoading) {
    return <LoadingSpinner label="Loading skills..." />;
  }

  if (isError) {
    return <div className="alert alert-danger mb-0">Skills could not be loaded.</div>;
  }

  const categories = ["Frontend", "Backend", "Database", "Tools"];

  return (
    <section className="section-shell surface-page" id="skills-section">
      <div className="container">
        {!compact ? (
          <SectionHeader
            eyebrow="02 / Skills"
            title="Technical Arsenal"
            description="Core capabilities grouped by discipline and delivered from the backend API."
          />
        ) : null}
        <div className="row g-4">
          {categories.map((category) => {
            const categorySkills = skills.filter((skill) => skill.category === category);

            return (
              <div
                key={category}
                className={category === "Frontend" && !compact ? "col-lg-6" : "col-lg-3"}
              >
                <div className="content-card h-100">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="h4 fw-bold mb-0">{category}</h3>
                    <i className="bi bi-stars text-primary fs-4" />
                  </div>
                  <p className="text-muted-custom">{categoryCopy[category]}</p>
                  <div className="d-flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span key={skill._id} className="chip">
                        <span className="chip-dot" />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

