const express = require("express");
const ProjectsController = require("../controllers/projectsController");

const router = express.Router({ mergeParams: true });

router.get("/", ProjectsController.getProjects);
router.get("/:projectId", ProjectsController.getProjectById);
router.post("/", ProjectsController.createProject);
router.patch("/:projectId", ProjectsController.updateProject);

export default router;
