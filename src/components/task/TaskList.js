import TaskItem from "./TaskItem";
import classes from "./TaskList.module.css";

export default function TaskList({ taskList, deleteTask, completeTaskAction }) {
  return (
    <ul className={classes.taskList}>
      {taskList.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTaskAction={deleteTask}
          completeTaskAction={completeTaskAction}
        />
      ))}
    </ul>
  );
}
