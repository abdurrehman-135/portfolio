import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  useCreateExperienceMutation,
  useCreateProjectMutation,
  useCreateServiceMutation,
  useCreateSkillMutation,
  useDeleteExperienceMutation,
  useDeleteProjectMutation,
  useDeleteServiceMutation,
  useDeleteSkillMutation,
  useGetExperiencesQuery,
  useGetMessagesQuery,
  useGetProfileQuery,
  useGetProjectsQuery,
  useGetServicesQuery,
  useGetSkillsQuery,
  useUpdateExperienceMutation,
  useUpdateMessageStatusMutation,
  useUpdateProfileMutation,
  useUpdateProjectMutation,
  useUpdateServiceMutation,
  useUpdateSkillMutation,
} from "../api/portfolioApi";
import AdminSidebar from "../components/admin/AdminSidebar";
import MessagesPanel from "../components/admin/MessagesPanel";
import OverviewPanel from "../components/admin/OverviewPanel";
import ProfilePanel from "../components/admin/ProfilePanel";
import ResourcePanel from "../components/admin/ResourcePanel";
import LoadingSpinner from "../components/ui/LoadingSpinner";
import StatusBadge from "../components/ui/StatusBadge";
import { logout } from "../features/auth/authSlice";

const projectFields = [
  { name: "title", label: "Title", type: "text", required: true, col: "col-md-6" },
  { name: "category", label: "Category", type: "text", required: true, col: "col-md-6" },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    required: true,
    rows: 4,
  },
  {
    name: "technologies",
    label: "Technologies",
    type: "array",
    required: true,
    col: "col-md-6",
  },
  { name: "imageUrl", label: "Image URL", type: "url", col: "col-md-6" },
  { name: "githubUrl", label: "GitHub URL", type: "url", col: "col-md-6" },
  { name: "liveUrl", label: "Live Demo URL", type: "url", col: "col-md-6" },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: ["Live", "In Review", "Draft"],
    col: "col-md-4",
  },
  { name: "order", label: "Display Order", type: "number", col: "col-md-4" },
  { name: "featured", label: "Featured project", type: "checkbox", col: "col-md-4" },
];

const skillFields = [
  { name: "name", label: "Skill", type: "text", required: true, col: "col-md-6" },
  {
    name: "category",
    label: "Category",
    type: "select",
    required: true,
    options: ["Frontend", "Backend", "Database", "Tools"],
    col: "col-md-6",
  },
  { name: "proficiency", label: "Proficiency", type: "number", col: "col-md-6" },
  { name: "icon", label: "Bootstrap Icon Name", type: "text", col: "col-md-6" },
  { name: "order", label: "Display Order", type: "number", col: "col-md-6" },
];

const experienceFields = [
  { name: "title", label: "Title", type: "text", required: true, col: "col-md-6" },
  {
    name: "organization",
    label: "Organization",
    type: "text",
    required: true,
    col: "col-md-6",
  },
  { name: "period", label: "Period", type: "text", required: true, col: "col-md-6" },
  { name: "location", label: "Location", type: "text", col: "col-md-6" },
  {
    name: "type",
    label: "Type",
    type: "select",
    options: ["work", "education", "certification"],
    col: "col-md-6",
  },
  { name: "order", label: "Display Order", type: "number", col: "col-md-6" },
  {
    name: "summary",
    label: "Summary",
    type: "textarea",
    required: true,
    rows: 4,
  },
  { name: "highlights", label: "Highlights", type: "array" },
];

const serviceFields = [
  { name: "title", label: "Title", type: "text", required: true, col: "col-md-6" },
  {
    name: "shortDescription",
    label: "Short Description",
    type: "text",
    required: true,
    col: "col-md-6",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    required: true,
    rows: 4,
  },
  { name: "features", label: "Features", type: "array", col: "col-md-6" },
  { name: "icon", label: "Bootstrap Icon Name", type: "text", col: "col-md-3" },
  { name: "order", label: "Display Order", type: "number", col: "col-md-3" },
];

const AdminDashboardPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.auth.user);
  const [activeSection, setActiveSection] = useState("overview");

  const { data: profile, isLoading: profileLoading } = useGetProfileQuery();
  const { data: projects = [], isLoading: projectLoading } = useGetProjectsQuery();
  const { data: skills = [], isLoading: skillLoading } = useGetSkillsQuery();
  const { data: experiences = [], isLoading: experienceLoading } = useGetExperiencesQuery();
  const { data: services = [], isLoading: serviceLoading } = useGetServicesQuery();
  const { data: messages = [], isLoading: messageLoading } = useGetMessagesQuery();

  const [createProject, createProjectState] = useCreateProjectMutation();
  const [updateProject, updateProjectState] = useUpdateProjectMutation();
  const [deleteProject, deleteProjectState] = useDeleteProjectMutation();
  const [createSkill, createSkillState] = useCreateSkillMutation();
  const [updateSkill, updateSkillState] = useUpdateSkillMutation();
  const [deleteSkill, deleteSkillState] = useDeleteSkillMutation();
  const [createExperience, createExperienceState] = useCreateExperienceMutation();
  const [updateExperience, updateExperienceState] = useUpdateExperienceMutation();
  const [deleteExperience, deleteExperienceState] = useDeleteExperienceMutation();
  const [createService, createServiceState] = useCreateServiceMutation();
  const [updateService, updateServiceState] = useUpdateServiceMutation();
  const [deleteService, deleteServiceState] = useDeleteServiceMutation();
  const [updateMessageStatus, updateMessageStatusState] =
    useUpdateMessageStatusMutation();
  const [updateProfile, updateProfileState] = useUpdateProfileMutation();

  if (
    profileLoading ||
    projectLoading ||
    skillLoading ||
    experienceLoading ||
    serviceLoading ||
    messageLoading
  ) {
    return <LoadingSpinner label="Loading dashboard..." />;
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate("/admin/login");
  };

  const sections = {
    overview: (
      <OverviewPanel
        projects={projects}
        skills={skills}
        experiences={experiences}
        services={services}
        messages={messages}
      />
    ),
    profile: (
      <ProfilePanel
        profile={profile}
        onSave={(payload) => updateProfile(payload).unwrap()}
        isSaving={updateProfileState.isLoading}
      />
    ),
    projects: (
      <ResourcePanel
        eyebrow="Project Management"
        title="Manage Projects"
        description="Add, update, and remove projects that appear in the public portfolio."
        items={projects}
        fields={projectFields}
        columns={[
          { key: "title", label: "Project" },
          { key: "category", label: "Category" },
          {
            label: "Stack",
            render: (item) => item.technologies.slice(0, 3).join(", "),
          },
          { label: "Status", render: (item) => <StatusBadge value={item.status} /> },
        ]}
        onCreate={(payload) => createProject(payload).unwrap()}
        onUpdate={(payload) => updateProject(payload).unwrap()}
        onDelete={(id) => deleteProject(id).unwrap()}
        isSaving={
          createProjectState.isLoading ||
          updateProjectState.isLoading ||
          deleteProjectState.isLoading
        }
      />
    ),
    skills: (
      <ResourcePanel
        eyebrow="Skill Matrix"
        title="Manage Skills"
        description="Curate grouped technical skills that are rendered in the public skills section."
        items={skills}
        fields={skillFields}
        columns={[
          { key: "name", label: "Skill" },
          { key: "category", label: "Category" },
          { key: "proficiency", label: "Proficiency" },
        ]}
        onCreate={(payload) => createSkill(payload).unwrap()}
        onUpdate={(payload) => updateSkill(payload).unwrap()}
        onDelete={(id) => deleteSkill(id).unwrap()}
        isSaving={
          createSkillState.isLoading ||
          updateSkillState.isLoading ||
          deleteSkillState.isLoading
        }
      />
    ),
    experience: (
      <ResourcePanel
        eyebrow="Resume Builder"
        title="Manage Experience"
        description="Maintain work experience, education, and certifications shown in the professional timeline."
        items={experiences}
        fields={experienceFields}
        columns={[
          { key: "title", label: "Title" },
          { key: "organization", label: "Organization" },
          { key: "period", label: "Period" },
          { key: "type", label: "Type" },
        ]}
        onCreate={(payload) => createExperience(payload).unwrap()}
        onUpdate={(payload) => updateExperience(payload).unwrap()}
        onDelete={(id) => deleteExperience(id).unwrap()}
        isSaving={
          createExperienceState.isLoading ||
          updateExperienceState.isLoading ||
          deleteExperienceState.isLoading
        }
      />
    ),
    services: (
      <ResourcePanel
        eyebrow="Service Catalog"
        title="Manage Services"
        description="Edit offerings that appear on the public services page and homepage."
        items={services}
        fields={serviceFields}
        columns={[
          { key: "title", label: "Service" },
          { key: "shortDescription", label: "Summary" },
          {
            key: "features",
            label: "Features",
            render: (item) => item.features.slice(0, 2).join(", "),
          },
        ]}
        onCreate={(payload) => createService(payload).unwrap()}
        onUpdate={(payload) => updateService(payload).unwrap()}
        onDelete={(id) => deleteService(id).unwrap()}
        isSaving={
          createServiceState.isLoading ||
          updateServiceState.isLoading ||
          deleteServiceState.isLoading
        }
      />
    ),
    messages: (
      <MessagesPanel
        messages={messages}
        onStatusChange={(id, status) => updateMessageStatus({ id, status }).unwrap()}
        isUpdating={updateMessageStatusState.isLoading}
      />
    ),
  };

  return (
    <>
      <Helmet>
        <title>Admin Dashboard | Abdur Rehman Ansari</title>
      </Helmet>
      <div className="admin-shell">
        <div className="row g-0">
          <div className="col-lg-auto">
            <AdminSidebar
              activeSection={activeSection}
              onChange={setActiveSection}
              onLogout={handleLogout}
              user={authUser}
            />
          </div>
          <div className="col">
            <div className="p-4 p-lg-5">
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-end gap-3 mb-4">
                <div>
                  <p className="eyebrow mb-2">01 / Overview</p>
                  <h1 className="hero-title mb-0">Command Center</h1>
                </div>
                <button
                  className="btn btn-aurora"
                  type="button"
                  onClick={() =>
                    setActiveSection(activeSection === "projects" ? "overview" : "projects")
                  }
                >
                  <i className="bi bi-plus-circle me-2" />
                  {activeSection === "projects" ? "Back to Overview" : "New Project"}
                </button>
              </div>
              {sections[activeSection]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboardPage;
