import { Helmet } from "react-helmet-async";

import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import HeroSection from "../components/sections/HeroSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";
import SkillsSection from "../components/sections/SkillsSection";

const HomePage = () => (
  <>
    <Helmet>
      <title>Abdur Rehman Ansari | Full Stack Developer</title>
    </Helmet>
    <HeroSection />
    <AboutSection compact />
    <SkillsSection compact />
    <ProjectsSection compact featuredOnly showFilters={false} limit={4} />
    <ServicesSection compact />
    <ExperienceSection compact />
    <ContactSection compact />
  </>
);

export default HomePage;

