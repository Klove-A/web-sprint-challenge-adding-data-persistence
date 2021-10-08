const projects = [
  {
    project_name: "project_1",
    project_description: "1st project",
    project_completed: false,
  },
  {
    project_name: "project_2",
    project_description: "2nd project",
    project_completed: false,
  },
  {
    project_name: "project_3",
    project_description: "3rd project",
    project_completed: false,
  },
];

const resources = [
  {
    resource_name: "resource_1",
    resource_description: "1st resource",
  },
  {
    resource_name: "resource_2",
    resource_description: "2nd resource",
  },
  {
    resource_name: "resource_3",
    resource_description: "3rd resource",
  },
  {
    resource_name: "resource_4",
    resource_description: "4th resource",
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  // await knex("tasks").insert(tasks);
  // await knex("project_resources").insert(project_resources);
};
