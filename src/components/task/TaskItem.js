import classes from "./TaskItem.module.css";

export default function TaskItem({
  task,
  deleteTaskAction,
  completeTaskAction,
}) {
  const { id, text, date, status } = task;

  return (
    <li className={classes.item}>
      <p className={status === "complete" ? classes.complete : undefined}>
        {text}
      </p>
      <div>
        <span>{date}</span>
        {status !== "complete" && (
          <button
            onClick={() => completeTaskAction(id)}
            className={classes.done}
          >
            Done
          </button>
        )}
        <button onClick={() => deleteTaskAction(id)} className={classes.delete}>
          Delete
        </button>
      </div>
    </li>
  );
}
