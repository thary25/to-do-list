import classes from "./TaskItem.module.css";

export default function TaskItem({ task, deleteTaskAction }) {
  const { id, text, date } = task;
  return (
    <li className={classes.item}>
      <span>
        <input type="checkbox" /> {text}
      </span>
      <div>
        <span>{date}</span>
        <button onClick={() => deleteTaskAction(id)} className={classes.delete}>
          Delete
        </button>
      </div>
    </li>
  );
}
