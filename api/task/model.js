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

module.exports = {
  getTasks,
};
