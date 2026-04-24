import ExperienceSection from "../components/sections/ExperienceSection";
import SkillsSection from "../components/sections/SkillsSection";
import PageHero from "../components/ui/PageHero";

const ResumePage = () => (
  <>
    <PageHero
      eyebrow="Resume"
      title="Project experience and technical growth."
      description="A resume page focused on campus project work, practical learning, and live skills data for future updates."
      pageTitle="Resume | Abdur Rehman Ansari"
    />
    <ExperienceSection />
    <SkillsSection compact />
  </>
);

export default ResumePage;
