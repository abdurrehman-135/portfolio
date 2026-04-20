import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useGetProjectsQuery } from "../../api/portfolioApi";
import {
  resetProjectFilters,
  setProjectCategory,
  setProjectSearch,
  setProjectTechnology,
} from "../../features/projects/projectFiltersSlice";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeader from "../ui/SectionHeader";
import StatusBadge from "../ui/StatusBadge";

const filterProjects = (projects, filters, featuredOnly) =>
  projects.filter((project) => {
    if (featuredOnly && !project.featured) {
      return false;
    }

    const matchesCategory =
      filters.category === "All" || project.category === filters.category;
    const matchesTechnology =
      filters.technology === "All" || project.technologies.includes(filters.technology);
    const searchText = filters.search.trim().toLowerCase();
    const matchesSearch =
      !searchText ||
      `${project.title} ${project.description} ${project.technologies.join(" ")}`
        .toLowerCase()
        .includes(searchText);

    return matchesCategory && matchesTechnology && matchesSearch;
  });

const ProjectsSection = ({
  compact = false,
  featuredOnly = false,
  limit,
  showFilters = true,
}) => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.projectFilters);
  const { data: projects = [], isLoading, isError } = useGetProjectsQuery();

  if (isLoading) {
    return <LoadingSpinner label="Loading projects..." />;
  }

  if (isError) {
    return <div className="alert alert-danger mb-0">Projects could not be loaded.</div>;
  }

  const categories = ["All", ...new Set(projects.map((project) => project.category))];
  const technologies = [
    "All",
    ...new Set(projects.flatMap((project) => project.technologies)),
  ];
  const activeFilters = showFilters
    ? filters
    : { category: "All", technology: "All", search: "" };

  const visibleProjects = filterProjects(projects, activeFilters, featuredOnly).slice(
    0,
    limit || projects.length,
  );

  return (
    <section className="section-shell surface-panel" id="projects-section">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-5">
          <SectionHeader
            eyebrow="03 / Projects"
            title="Selected Works"
            description="Dynamic project cards fetched from MongoDB, with category and technology filtering driven by Redux state."
          />
          {!compact ? (
            <button
              className="btn btn-panel align-self-start align-self-lg-end"
              type="button"
              onClick={() => dispatch(resetProjectFilters())}
            >
              Reset Filters
            </button>
          ) : null}
        </div>

        {showFilters ? (
          <div className="content-card mb-4">
            <div className="row g-3 align-items-end">
              <div className="col-lg-4">
                <label className="form-label text-soft-custom">Search</label>
                <input
                  className="form-control"
                  type="text"
                  value={filters.search}
                  placeholder="Search projects or technologies"
                  onChange={(event) => dispatch(setProjectSearch(event.target.value))}
                />
              </div>
              <div className="col-md-6 col-lg-4">
                <label className="form-label text-soft-custom">Category</label>
                <select
                  className="form-select"
                  value={filters.category}
                  onChange={(event) => dispatch(setProjectCategory(event.target.value))}
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-6 col-lg-4">
                <label className="form-label text-soft-custom">Technology</label>
                <select
                  className="form-select"
                  value={filters.technology}
                  onChange={(event) => dispatch(setProjectTechnology(event.target.value))}
                >
                  {technologies.map((technology) => (
                    <option key={technology} value={technology}>
                      {technology}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        ) : null}

        <div className="row g-4">
          {visibleProjects.map((project) => (
            <div key={project._id} className="col-lg-6">
              <article className="project-card h-100">
                <div className="project-image-wrap">
                  <img
                    className="img-fluid w-100 h-100 project-image"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                </div>
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-start gap-3 mb-3">
                    <div>
                      <p className="eyebrow mb-2">{project.category}</p>
                      <h3 className="h3 fw-bold mb-0">{project.title}</h3>
                    </div>
                    <StatusBadge value={project.status} />
                  </div>
                  <p className="text-muted-custom mb-4">{project.description}</p>
                  <div className="d-flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="chip">
                        <span className="chip-dot" />
                        {technology}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex flex-wrap gap-3">
                    {project.liveUrl ? (
                      <a
                        className="btn btn-aurora"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    ) : null}
                    <a
                      className={`btn ${project.liveUrl ? "btn-panel" : "btn-aurora"}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        {!visibleProjects.length ? (
          <div className="mt-4 alert alert-secondary">
            No projects match the current filters. Try adjusting the category,
            technology, or search term.
          </div>
        ) : null}

        {compact ? (
          <div className="text-center mt-4">
            <Link to="/projects" className="btn btn-ghost-light">
              View All Projects
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectsSection;
