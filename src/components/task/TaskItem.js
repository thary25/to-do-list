import classes from "./TaskItem.module.css";

export default function TaskItem({ task }) {
  const { text, date } = task;
  return (
    <li className={classes.item}>
      <span>
        <input type="checkbox" /> {text}
      </span>
      <span>{date}</span>
    </li>
  );
}
