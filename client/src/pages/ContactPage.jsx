import ContactSection from "../components/sections/ContactSection";
import PageHero from "../components/ui/PageHero";

const ContactPage = () => (
  <>
    <PageHero
      eyebrow="Contact"
      title="Start the conversation."
      description="Send a message directly from the site and have it saved to MongoDB for review in the admin dashboard."
      pageTitle="Contact | Abdur Rehman Ansari"
    />
    <ContactSection />
  </>
);

export default ContactPage;

