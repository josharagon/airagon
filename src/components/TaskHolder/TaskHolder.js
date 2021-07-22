import TaskCards from "../TaskCards/TaskCards";
const taskList = [
  {
    name: "Task 1",
    product: "Jordan 6 Scotts",
    size: 9.5,
    type: "Restock Mode",
    status: "In Progress",
    profile: "Main",
    proxy: "lightning proxy",
  },
  {
    name: "Task 2",
    product: "Jordan 6 Scotts",
    size: 9.5,
    type: "Restock Mode",
    status: "In Progress",
    profile: "Main",
    proxy: "lightning proxy",
  },
  {
    name: "Task 3",
    product: "Jordan 6 Scotts",
    size: 9.5,
    type: "Restock Mode",
    status: "In Progress",
    profile: "Main",
    proxy: "lightning proxy",
  },
];
const TaskHolder = () => {
  let allTasks = taskList.map((task) => {
    return <TaskCards task={task} />;
  });

  return <section className="task-holder">{allTasks}</section>;
};

export default TaskHolder;
