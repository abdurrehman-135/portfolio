import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "../components/sections/SkillsSection";
import PageHero from "../components/ui/PageHero";

const ResumePage = () => (
  <>
    <PageHero
      eyebrow="Resume"
      title="Experience, education, and technical breadth."
      description="A resume page that combines timeline storytelling with live skills data for future updates."
      pageTitle="Resume | Abdur Rehman Ansari"
    />
    <ExperienceSection />
    <SkillsSection compact />
  </>
);

export default ResumePage;

