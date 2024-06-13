const ProjectsService = require("../services/projectsService");

class ProjectsController {
  static async getProjects(req, res) {
    try {
      const projects = await ProjectsService.getProjects();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: "Failed to get projects" });
    }
  }

  static async getProjectById(req, res) {
    try {
      const { projectId } = req.params;
      const project = await ProjectsService.getProjectById(projectId);
      if (project) {
        res.status(200).json(project);
      } else {
        res
          .status(404)
          .json({ error: `Project with ID ${projectId} not found` });
      }
    } catch (error) {
      res.status(500).json({ error: `Failed to get project: ${projectId}` });
    }
  }

  static async createProject(req, res) {
    try {
      const createdProject = req.body;
      const project = await ProjectsService.createProject(createdProject);
      res.status(201).json(project);
    } catch (error) {
      res.status(500).json({ error: "Failed to create project" });
    }
  }

  static async updateProject(req, res) {
    try {
      const { projectId } = req.params;
      const updatedProject = req.body;
      const project = await ProjectsService.updateProject(
        projectId,
        updatedProject
      );
      res.status(200).json(project);
    } catch (error) {
      res.status(500).json({ error: `Failed to update project: ${projectId}` });
    }
  }
}

module.exports = ProjectsController;
