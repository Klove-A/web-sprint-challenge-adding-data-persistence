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

// function createProject(project) {
//   return db("projects")
//     .insert(project)
//     .then(([project_id]) => {
//       return db("projects").where("project_id", project_id).first();
//     });
// }

// async function createProject(project) {
//   const [project_id] = await db("projects").insert(project);
//   const newProject = getProject(project_id)
//     .where("project_id", project_id)
//     .first();

//   return newProject.map((project) => {
//     return {
//       ...project,
//       project_completed: project.project_completed === 1,
//     };
//   });
// }

async function createProject(project) {
  const [project_id] = await db("projects").insert(project);
  const newProject = getProjects()

  // return newProject.filter((project) => {
  //   return project_id > 1
  // })

  newProject.filter(checkId)

  function checkId(id) {
    return id >= project.project_id;
  }
    
}

module.exports = {
  getProjects,
  createProject,
};
