const db = require("../../data/dbConfig");

async function getTasks() {
  const tasks = await db("tasks as t")
    .join("projects as p", "t.project_id", "p.project_id")
    .select("t.*", "p.project_name", "p.project_description");

  return tasks.map((task) => {
    return {
      ...task,
      task_completed: task.task_completed === 1,
    };
  });
}

function getTask() {
  return db("tasks");
}

async function createTask(task) {
  const [task_id] = await db("tasks").insert(task);

  const newTask = await getTask().where("task_id", task_id).first();

  return { ...newTask, task_completed: task.task_completed === 1 };
}

module.exports = {
  getTasks,
  createTask,
};
