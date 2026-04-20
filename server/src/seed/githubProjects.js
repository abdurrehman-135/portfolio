const DEFAULT_GITHUB_USERNAME = "abdurrehman-135";

const titleCase = (value) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const formatRepoTitle = (repoName) => {
  const normalized = repoName.replace(/^[-_]+/, "").replace(/[-_]+/g, " ").trim();
  return titleCase(normalized);
};

const determineCategory = (repoName) => {
  const normalized = repoName.toLowerCase();

  if (normalized.includes("portfolio")) return "Portfolio";
  if (normalized.includes("project")) return "Project";
  if (normalized.includes("homework")) return "Coursework";
  if (normalized.includes("exercise")) return "Practice";
  if (normalized.includes("demo")) return "Demo";
  if (normalized.includes("assignment")) return "Assignment";

  return "Repository";
};

const determineStatus = (repo) => {
  if (repo.homepage) {
    return "Live";
  }

  const updatedMs = Date.now() - new Date(repo.updated_at).getTime();
  const updatedDays = updatedMs / (1000 * 60 * 60 * 24);

  if (updatedDays <= 30) {
    return "In Review";
  }

  return "Draft";
};

const buildDescription = (repo, title, category) => {
  if (repo.description?.trim()) {
    return repo.description.trim();
  }

  const language = repo.language || "web technologies";
  return `${title} is a public ${category.toLowerCase()} repository from Abdur Rehman Ansari's GitHub profile, built primarily with ${language}.`;
};

const buildImageUrl = (title) =>
  `https://placehold.co/1200x700/081425/adc6ff?text=${encodeURIComponent(title)}`;

const buildTechnologies = (repo) => {
  const values = [repo.language, ...(repo.topics || [])].filter(Boolean);
  return Array.from(new Set(values.length ? values : ["GitHub"]));
};

export const fetchGithubProjects = async (
  githubUsername = process.env.GITHUB_USERNAME || DEFAULT_GITHUB_USERNAME,
) => {
  const response = await fetch(
    `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "Abdur-Portfolio-Seed",
      },
    },
  );

  if (!response.ok) {
    throw new Error(`GitHub repo fetch failed with status ${response.status}.`);
  }

  const repos = await response.json();

  return repos
    .filter((repo) => !repo.fork)
    .sort((left, right) => new Date(right.updated_at) - new Date(left.updated_at))
    .map((repo, index) => {
      const title = formatRepoTitle(repo.name);
      const category = determineCategory(repo.name);

      return {
        title,
        category,
        description: buildDescription(repo, title, category),
        technologies: buildTechnologies(repo),
        githubUrl: repo.html_url,
        liveUrl: repo.homepage || "",
        imageUrl: buildImageUrl(title),
        featured: index < 6,
        status: determineStatus(repo),
        order: index + 1,
      };
    });
};

