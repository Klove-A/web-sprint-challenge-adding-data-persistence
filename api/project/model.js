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

// function createProject(project) {
//   return db("projects")
//     .insert(project)
//     .then(([project_id]) => {
//       return db("projects").where("project_id", project_id).first();
//     });
// }

async function createProject(project) {
  const [project_id] = await db("projects").insert(project);
  return getprojects().where({ project_id }).first();
}

module.exports = {
  getProjects,
  createProject,
};
