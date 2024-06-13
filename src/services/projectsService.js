const fs = require("fs").promises;
const path = require("path");

const projectsFilePath = path.join(__dirname, "../projects.json");

class ProjectsService {
  static async getProjects() {
    const projects = await fs.readFile(projectsFilePath, "utf8");
    return JSON.parse(projects);
  }

  static async getProjectById(projectId) {
    const projects = await this.getProjects();
    return projects.find((p) => p.id === projectId);
  }

  static async createProject(createdProject) {
    const projects = await this.getProjects();
    projects.push(createdProject);
    await fs.writeFile(projectsFilePath, JSON.stringify(projects, null, 2));
    return createdProject;
  }

  static async updateProject(projectId, updatedProject) {
    const projects = await this.getProjects();
    const projectIndex = projects.findIndex((p) => p.id === projectId);
    if (projectIndex !== -1) {
      projects[projectIndex] = { ...projects[projectIndex], ...updatedProject };
      await fs.writeFile(projectsFilePath, JSON.stringify(projects, null, 2));
      return projects[projectIndex];
    }
    throw new Error(`Project with ID ${projectId} not found`);
  }
}

module.exports = ProjectsService;
