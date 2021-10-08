const projects = [
  {
    project_name: "project_1",
    project_description: "1st project",
    project_completed: false,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  // await knex("resources").insert(resources);
  // await knex("tasks").insert(tasks);
  // await knex("project_resources").insert(project_resources);
};
