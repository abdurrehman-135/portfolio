import ServicesSection from "../components/sections/ServicesSection";
import PageHero from "../components/ui/PageHero";

const ServicesPage = () => (
  <>
    <PageHero
      eyebrow="Services"
      title="What Abdur Rehman Ansari can help you build."
      description="Service offerings are editable through the admin dashboard and rendered with the provided editorial-dark design style."
      pageTitle="Services | Abdur Rehman Ansari"
    />
    <ServicesSection />
  </>
);

export default ServicesPage;

