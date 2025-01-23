import classes from "./TaskItem.module.css";

export default function TaskItem({ task }) {
  const { text, date } = task;
  return (
    <li className={classes.item}>
      <span>
        <input type="checkbox" /> {text}
      </span>
      <div>
        <span>{date}</span>
        <button className={classes.delete}>Delete</button>
      </div>
    </li>
  );
}
