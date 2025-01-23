import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";

export default function TaskList({ taskList, deleteTask }) {
  return (
    <ul className={classes.taskList}>
      {taskList.map((task) => (
        <TaskItem key={task.text} task={task} deleteTaskAction={deleteTask} />
      ))}
    </ul>
  );
}
