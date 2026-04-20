import { useState } from "react";

import {
  useCreateMessageMutation,
  useGetProfileQuery,
} from "../../api/portfolioApi";
import LoadingSpinner from "../ui/LoadingSpinner";
import SectionHeader from "../ui/SectionHeader";

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactSection = ({ compact = false }) => {
  const [formState, setFormState] = useState(initialFormState);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");
  const { data: profile, isLoading, isError } = useGetProfileQuery();
  const [createMessage, { isLoading: isSubmitting }] = useCreateMessageMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const validateForm = () => {
    if (
      !formState.name.trim() ||
      !formState.email.trim() ||
      !formState.subject.trim() ||
      !formState.message.trim()
    ) {
      return "All fields are required.";
    }

    if (!/\S+@\S+\.\S+/.test(formState.email)) {
      return "Please enter a valid email address.";
    }

    if (formState.message.trim().length < 10) {
      return "Message must be at least 10 characters long.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError("");
    setFormSuccess("");

    const validationMessage = validateForm();
    if (validationMessage) {
      setFormError(validationMessage);
      return;
    }

    try {
      await createMessage(formState).unwrap();
      setFormSuccess("Your message has been sent and stored successfully.");
      setFormState(initialFormState);
    } catch (error) {
      setFormError(error?.data?.message || "Message delivery failed. Please try again.");
    }
  };

  if (isLoading) {
    return <LoadingSpinner label="Loading contact details..." />;
  }

  if (isError || !profile) {
    return <div className="alert alert-danger mb-0">Contact details could not be loaded.</div>;
  }

  return (
    <section className="section-shell surface-page" id="contact-section">
      <div className="container">
        {!compact ? (
          <SectionHeader
            eyebrow="06 / Contact"
            title="Let's Build Something Extraordinary"
            description="A fully working contact form with backend validation and MongoDB message storage."
          />
        ) : null}
        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <div className="content-card h-100">
              <h3 className="section-title mb-3">Available for freelance and full-time work.</h3>
              <p className="text-muted-custom fs-5 mb-4">{profile.intro}</p>
              <div className="d-grid gap-3">
                <div className="surface-card rounded-4 p-3">
                  <div className="text-soft-custom small text-uppercase mb-1">Email</div>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
                <div className="surface-card rounded-4 p-3">
                  <div className="text-soft-custom small text-uppercase mb-1">Phone</div>
                  <span>{profile.phone}</span>
                </div>
                <div className="surface-card rounded-4 p-3">
                  <div className="text-soft-custom small text-uppercase mb-1">Location</div>
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="content-card form-shell">
              {formError ? <div className="alert alert-danger">{formError}</div> : null}
              {formSuccess ? <div className="alert alert-success">{formSuccess}</div> : null}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-soft-custom">Name</label>
                    <input
                      className="form-control"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label text-soft-custom">Email</label>
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-soft-custom">Subject</label>
                    <input
                      className="form-control"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-soft-custom">Message</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="6"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <div className="col-12">
                    <button className="btn btn-aurora w-100" disabled={isSubmitting} type="submit">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
