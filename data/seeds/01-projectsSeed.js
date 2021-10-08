const projects = [
  {
    project_name: "project_1",
    project_description: "1st project",
    project_completed: false,
  },
  {
    project_name: "project_2",
    project_description: "2nd project",
    project_completed: true,
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

const tasks = [
  {
    task_description: "task_1",
    task_notes: "project_1's 1st task",
    task_completed: false,
    project_id: 1,
  },
  {
    task_description: "task_2",
    task_notes: "project_1's 2nd task",
    task_completed: false,
    project_id: 1,
  },
  {
    task_description: "task_3",
    task_notes: "project_1's 3rd task",
    task_completed: false,
    project_id: 1,
  },
  {
    task_description: "task_4",
    task_notes: "project_2's 1st task",
    task_completed: true,
    project_id: 2,
  },
  {
    task_description: "task_5",
    task_notes: "project_3's 1st task",
    task_completed: false,
    project_id: 3,
  },
  {
    task_description: "task_6",
    task_notes: "project_3's 2nd task",
    task_completed: false,
    project_id: 3,
  },
];

const project_resources = [
  {
    project_id: 1,
    resource_id: 1,
  },
  {
    project_id: 1,
    resource_id: 2,
  },
  {
    project_id: 2,
    resource_id: 3,
  },
  {
    project_id: 3,
    resource_id: 4,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  await knex("project_resources").insert(project_resources);
};
