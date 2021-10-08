const db = require("../../data/dbConfig");

async function getProjects() {
  // return db("projects");
  const projects = await db("projects");

  return projects.map((project) => {
    return {
      ...project,
      project_completed: project.project_completed === 1,
    };
  });
}

function createProject() {
  return console.log("post project");
}

module.exports = {
  getProjects,
  createProject,
};
