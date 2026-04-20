import { useEffect, useState } from "react";

const ProfilePanel = ({ profile, onSave, isSaving }) => {
  const [formState, setFormState] = useState({
    name: "",
    title: "",
    availability: "",
    intro: "",
    about: "",
    location: "",
    email: "",
    phone: "",
    resumeUrl: "",
    githubUrl: "",
    linkedinUrl: "",
    twitterUrl: "",
    heroImageUrl: "",
    yearsExperience: 0,
    projectCount: 0,
    educationLabel: "",
    interests: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (profile) {
      setFormState({
        name: profile.name || "",
        title: profile.title || "",
        availability: profile.availability || "",
        intro: profile.intro || "",
        about: profile.about || "",
        location: profile.location || "",
        email: profile.email || "",
        phone: profile.phone || "",
        resumeUrl: profile.resumeUrl || "",
        githubUrl: profile.githubUrl || "",
        linkedinUrl: profile.linkedinUrl || "",
        twitterUrl: profile.twitterUrl || "",
        heroImageUrl: profile.heroImageUrl || "",
        yearsExperience: profile.yearsExperience || 0,
        projectCount: profile.projectCount || 0,
        educationLabel: profile.educationLabel || "",
        interests: Array.isArray(profile.interests) ? profile.interests.join(", ") : "",
      });
    }
  }, [profile]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setError("");

    try {
      await onSave({
        ...formState,
        yearsExperience: Number(formState.yearsExperience),
        projectCount: Number(formState.projectCount),
        interests: formState.interests
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
      });
      setMessage("Profile updated successfully.");
    } catch (submitError) {
      setError(submitError?.data?.message || "Profile update failed.");
    }
  };

  return (
    <div className="dashboard-panel">
      <div className="mb-4">
        <p className="eyebrow mb-2">Profile Settings</p>
        <h2 className="h2 fw-bold mb-2">Public Portfolio Identity</h2>
        <p className="text-muted-custom mb-0">
          Update the public profile, about section, contact details, and social links used across
          the site.
        </p>
      </div>

      {message ? <div className="alert alert-success">{message}</div> : null}
      {error ? <div className="alert alert-danger">{error}</div> : null}

      <form className="form-shell" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label text-soft-custom">Name</label>
            <input
              className="form-control"
              name="name"
              value={formState.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-soft-custom">Title</label>
            <input
              className="form-control"
              name="title"
              value={formState.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-soft-custom">Availability</label>
            <input
              className="form-control"
              name="availability"
              value={formState.availability}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-soft-custom">Location</label>
            <input
              className="form-control"
              name="location"
              value={formState.location}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label className="form-label text-soft-custom">Intro</label>
            <textarea
              className="form-control"
              rows="3"
              name="intro"
              value={formState.intro}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-12">
            <label className="form-label text-soft-custom">About</label>
            <textarea
              className="form-control"
              rows="5"
              name="about"
              value={formState.about}
              onChange={handleChange}
              required
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
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-soft-custom">Phone</label>
            <input
              className="form-control"
              name="phone"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-soft-custom">Resume URL</label>
            <input
              className="form-control"
              name="resumeUrl"
              value={formState.resumeUrl}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label text-soft-custom">GitHub</label>
            <input
              className="form-control"
              name="githubUrl"
              value={formState.githubUrl}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label text-soft-custom">LinkedIn</label>
            <input
              className="form-control"
              name="linkedinUrl"
              value={formState.linkedinUrl}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label text-soft-custom">Twitter</label>
            <input
              className="form-control"
              name="twitterUrl"
              value={formState.twitterUrl}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label text-soft-custom">Years Experience</label>
            <input
              className="form-control"
              name="yearsExperience"
              type="number"
              value={formState.yearsExperience}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label text-soft-custom">Project Count</label>
            <input
              className="form-control"
              name="projectCount"
              type="number"
              value={formState.projectCount}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label text-soft-custom">Education Label</label>
            <input
              className="form-control"
              name="educationLabel"
              value={formState.educationLabel}
              onChange={handleChange}
            />
          </div>
          <div className="col-12">
            <label className="form-label text-soft-custom">Interests</label>
            <input
              className="form-control"
              name="interests"
              value={formState.interests}
              onChange={handleChange}
              placeholder="Scalable Systems, API Design, Modern UI Engineering"
            />
          </div>
          <div className="col-12">
            <button className="btn btn-aurora" disabled={isSaving} type="submit">
              {isSaving ? "Saving..." : "Save Profile"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfilePanel;
