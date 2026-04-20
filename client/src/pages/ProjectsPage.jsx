import ProjectsSection from "../components/sections/ProjectsSection";
import PageHero from "../components/ui/PageHero";

const ProjectsPage = () => (
  <>
    <PageHero
      eyebrow="Projects"
      title="A curated portfolio of modern builds."
      description="Explore work by category, technology, and search terms using Redux-powered project filters."
      pageTitle="Projects | Abdur Rehman Ansari"
    />
    <ProjectsSection />
  </>
);

export default ProjectsPage;

