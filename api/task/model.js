const db = require("../../data/dbConfig");

async function getTasks() {
  const tasks = await db("tasks");

  return tasks.map((task) => {
    return {
      ...task,
      task_completed: task.task_completed === 1,
    };
  });
}

async function createTask(task) {
  const [task_id] = await db("tasks").insert(task);
  return getTasks().where({ task_id }).first();
}

module.exports = {
  getTasks,
  createTask,
};
