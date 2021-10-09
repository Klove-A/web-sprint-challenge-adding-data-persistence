const db = require("../../data/dbConfig");

async function getProjects() {
  const projects = await db("projects");

  return projects.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed === 1,
    };
  });
}

function getProject() {
  return db("projects");
}

async function createProject(project) {
  const [project_id] = await db("projects").insert(project);

  const newProject = await getProject().where("project_id", project_id).first();

  return { ...newProject, project_completed: project.project_completed === 1 };
}


module.exports = {
  getProjects,
  createProject,
};
